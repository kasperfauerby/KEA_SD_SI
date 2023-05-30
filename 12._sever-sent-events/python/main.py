from fastapi import FastAPI;

from fastapi.templating import Jinja2Templates;

templates = Jinja2Templates(directory="templates")


app = FastAPI()

@app.get("/")
async def root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/sse")
def sse()   :
    return SSEResponse(events())