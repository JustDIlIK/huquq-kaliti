from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.admin.auth import authentication_backend
from app.database import engine
from app.users.router import router as router_user
from app.admin.router import router as admin_router
from sqladmin import Admin

app = FastAPI()
app.include_router(router_user)
app.include_router(admin_router)
app.mount('/media', StaticFiles(directory='media'), name='media')
admin = Admin(app, engine=engine, authentication_backend=authentication_backend)
origins = [
    "http:localhost:5173",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from app.service.router import router as router_service
app.include_router(router_service)
from app.document.router import router as router_document
app.include_router(router_document)
from app.lawyer.router import router as router_lawyer
app.include_router(router_lawyer)
from app.appeal.router import router as router_appeal
app.include_router(router_appeal)
from app.news.router import router as router_news
app.include_router(router_news)
from app.chat.router import router as router_chat
app.include_router(router_chat)
from app.questions.router import router as router_questions
app.include_router(router_questions)
from app.complaints.router import router as router_complaints
app.include_router(router_complaints)
