# -*- coding: utf-8 -*-
"""Beer.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1gq9OCjXCLmFO7J5sEoUxajx32FVmghHY
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from ast import literal_eval
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

data = pd.read_csv('/content/beer.csv',encoding='CP949')

# data.head(2)

# data.shape

dfc = data[['aroma',	'appearance',	'flavor',	'mouthfeel']]

# dfc

df_for_cossim_T = dfc.transpose()

item_sim = cosine_similarity(dfc, dfc)
item_sim_df = pd.DataFrame(data=item_sim, index=df_for_cossim_T.columns, columns=df_for_cossim_T.columns)
# print(item_sim_df.shape)
# item_sim_df

c0 = pd.DataFrame(item_sim_df[10].sort_values(ascending=False)[0:30])
c0['index'] = c0.index
c1 = pd.merge(c0, dfc, left_on = 'index', right_on= dfc.index, how = 'inner')
c1