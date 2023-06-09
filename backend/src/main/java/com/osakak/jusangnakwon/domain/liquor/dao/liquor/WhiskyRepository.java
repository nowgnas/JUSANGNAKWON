package com.osakak.jusangnakwon.domain.liquor.dao.liquor;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto;
import com.osakak.jusangnakwon.domain.liquor.entity.liquor.Whisky;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface WhiskyRepository extends JpaRepository<Whisky, Long>, WhiskyQueryRepository {
    /**
     * 전체 위스키 칵테일 랭킹순 조회
     *
     * @param pageable 페이징 정보
     * @return 페이징 포함 위스키 칵테일 리스트
     */
    @Query("select new com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto(l.id, l.name, l.img, l.liquorType) " +
            "from Whisky l " +
            "order by l.ratingAvg desc ")
    Page<LiquorListItemDto> findListByRatingIsNotLoggedIn(Pageable pageable);

    @Query("select l from Whisky l where l.name like :keyword%")
    Optional<List<Whisky>> findByKeyword(@Param("keyword") String keyword);

    @Query("select new com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto(w.id,w.name,w.img,w.liquorType,s.scrapped) from Whisky w left join Scrap s on s.liquorId = w.id and w.liquorType = s.liquorType and s.user.id = :userId WHERE w.id IN :similarWhiskyUniqueList ")
    Page<LiquorListItemDto> findById(Set<Long> similarWhiskyUniqueList, Pageable pageable, @Param("userId") Long userId);

    @Query("select l from  Whisky l where l.id in (:list)")
    List<Whisky> findByIdList(@Param("list") List<Long> list);

    @Query("select new com.osakak.jusangnakwon.domain.liquor.dto.LiquorListItemDto(l.id, l.name, l.img, l.liquorType, s.scrapped) " +
            "from Whisky l " +
            "left join fetch Scrap s " +
            "on l.liquorType=s.liquorType and l.id=s.liquorId and s.user.id=:userId " +
            "order by l.ratingAvg desc ")
    Page<LiquorListItemDto> findListByRatingIsLogin(Pageable pageable, Long userId);

}
