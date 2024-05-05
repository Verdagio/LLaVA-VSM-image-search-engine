import json
import re
import os
import pandas as pd
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

nltk.download('punkt')
nltk.download('stopwords')

def clean_text(text):
    text = re.sub(r'[^\w\s]', '', text.lower())
    tokens = word_tokenize(text)
    stop_words = set(stopwords.words('english'))
    tokens = [word for word in tokens if word not in stop_words]
    return ' '.join(tokens)

class SearchEngine:
    def __init__(self):
        self.data = pd.read_csv(os.getcwd() + '/app/data/data.csv')
        self.model = SentenceTransformer('all-MiniLM-L6-v2')
        self.generate_embedddings()

    def generate_embedddings(self):
        self.data = self.data.dropna(how='any', subset=['image', 'description', 'title']).reset_index(drop=True)
        self.data['embedding'] = self.data['description'].apply(clean_text).apply(self.model.encode)
       
    def search(self, query, n=50):
        query_embedding = self.model.encode(clean_text(query))
        similarity_scores = self.data['embedding'].apply(lambda x: cosine_similarity(x.reshape(1, -1), query_embedding.reshape(1, -1)))
        sorted_scores = similarity_scores.sort_values(ascending=False)
        return json.dumps([{
            'image': self.data.iloc[i]['image'],
            'title': self.data.iloc[i]['title'],
            'description': self.data.iloc[i]['description']
        } for i in sorted_scores.index[:n]])


