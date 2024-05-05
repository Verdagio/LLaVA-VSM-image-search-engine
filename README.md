# LLaVA-VSM-image-search-engine

ABSTRACT 

In this project, we present a search engine architecture that leverages the power of vector space models (VSMs) to efficiently retrieve images. The system uses vector representations of the text descriptions generated using multimodal generative AI of images. These vector representations are used to calculate cosine similarities between user queries and documents. A custom-built VSM-based search engine is implemented using industry standard libraries to gather, process and retrieve data. The search engine's ability to rank multimedia data based on query similarity scores is demonstrated through a proof-of-concept implementation. This approach offers retrieval accuracy, scalability, and simplified indexing mechanism.  

Keywords 

Image retrieval, Transformer model, Large Language and Visual Assistant, Multimodal, Generative AI, Vector Support Machine, search engine, information retrieval, Web scraper. 

INTRODUCTION 

The explosion of images on the internet has created an unprecedented challenge for image retrieval systems. Traditional methods often struggle to keep up with the sheer volume and complexity of visual content, sometimes requiring labor-intensive manual annotations to bridge the gap [1]. This approach harnesses the power of a transformer model known as Large Language and Visual Assistant (LLaVA) to generate rich descriptions or annotations for images, combined with a Vector Support Machine (VSM) based search engine designed for image retrieval. 

This paper explores whether transformer models, renowned  for their success in natural language processing (NLP), can create rich annotations for visual content. It investigates how this approach impacts indexing and retrieval performance, shedding light on the potential of machine learning (ML) techniques in processing and indexing large image datasets.  

As images are often subjectively interpreted by different users, we examine how our system ensures that retrieved results align closely with varied user queries. This variance in user queries highlights the potential of transformer models to provide rich nuanced annotations and interpret visual content, setting the stage for a comprehensive discussion on the fusion of NLP and ML in image retrieval. 

The variety of images is somewhat random but focuses on wildlife, landscapes, cities, and vehicles. The terms used to scrape images are permutations of ~30 nouns and ~50 adjectives. to create search terms which were subsequently injected into google image searches. Using Selenium a browser session would start and an instance of the ‘Undetected Chromedriver’ is used to find all elements using the XPATH and then cherry pic the image src and alt properties. Once all the image URLs and titles are collected, they are then retrieved and written to .jpg files and stored in a common folder for later processing. During data gathering, about 1000 images are retrieved, with the first 1000 used in the dataset.  

# How to run

## Docker

`docker-compose up --build`

## Run out of container

### Client
```
cd client

nvm use

npm i 
```
Run in dev mode: `npm run dev`

Alternatively:
```
npm run build

npm run preview 
```

### Server

```
cd server

pip install -r ./requirements.txt 

uvicorn app.main:app --port 8000
```

Finally in your browser go to: http://localhost:5173 
