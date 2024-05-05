from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from app.search_engine import SearchEngine

search_engine = SearchEngine()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

@app.get("/healthcheck")
def read_root():
    return {"Hello": "World"}


@app.post("/search")
async def search(request: Request):
    request = await request.json()
    results = search_engine.search(request['query'])
    return { "results": results }
