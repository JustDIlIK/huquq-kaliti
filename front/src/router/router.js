import Main from "../pages/Main.jsx";
import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    ADMIN_SERVICES_ROUTE, ADMIN_USUALLY_QUESTION_ROUTE,
    BECOME_LAWYER_ROUTE,
    CHAT_ROUTE, COMPLAINTS_PAGE_ROUTE,
    COMPLAINTS_ROUTE,
    CONSTRUCTOR_ROUTE,
    DASHBOARD_ROUTE,
    DOCUMENT_CONSTRUCTOR_ROUTE, EDIT_DOCUMENT_CONSTRUCTOR_ROUTE,
    FEEDBACKS_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    PATTERNS_ROUTE,
    PERMISSIONS_ROUTE,
    PROFILE_ROUTE,
    REGISTER_ROUTE,
    SERVICE_ROUTE,
    SERVICES_ROUTE,
    SPECIALIST_ROUTE,
    SPECIALISTS_ROUTE,
    SUPPORT_ROUTE,
    TEMPLATE_CATEGORIES_ROUTE,
    TEMPLATE_DOCUMENTS_ROUTE,
    USERS_ROUTE,
    USUALLY_QUESTIONS_ROUTE
} from "../assets/utils.js";
import Login from "../pages/login/Login.jsx";
import Registration from "../pages/registration/Registration.jsx";
import SpecialistsPage from "../pages/specialists/SpecialistsPage.jsx";
import Admin from "../pages/admin/Admin.jsx";
import Dashboard from "../components/admin/Dashboard.jsx";
import Profile from "../components/admin/Profile.jsx";
import Support from "../components/admin/Support.jsx";
import Chat from "../components/admin/chat/Chat.jsx";
import Specialist from "../pages/specialists/profile/Specialist.jsx";
import SpecialistFeedbacks from "../pages/specialists/profile/SpecialistFeedbacks.jsx";
import ConstructorPage from "../pages/constructor/ConstructorPage.jsx";
import Patterns from "../pages/patterns/Patterns.jsx";
import AboutUs from "../pages/about/AboutUs.jsx";
import ServicesPage from "../pages/services/ServicesPage.jsx";
import ServicePage from "../pages/services/service-page/ServicePage.jsx";
import Users from "../components/admin/protected/Users.jsx";
import Complaints from "../components/admin/protected/Complaints.jsx";
import BecomeLawyer from "../components/admin/protected/BecomeLawyer.jsx";
import Services from "../components/admin/protected/Services.jsx";
import Permissions from "../components/admin/protected/Permissions.jsx";
import TemplateCategories from "../components/admin/protected/TemplateCategories.jsx";
import UsuallyQuestionsPage from "../pages/usually-questions/UsuallyQuestionsPage.jsx";
import DocumentConstructor from "../components/admin/protected/DocumentConstructor.jsx";
import TemplateDocuments from "../components/admin/protected/TemplateDocuments.jsx";
import EditDocumentConstructor from "../components/admin/protected/EditDocumentConstructor.jsx";
import AdminUsuallyQuestions from "../components/admin/protected/AdminUsuallyQuestions.jsx";
import ComplaintPage from "../components/admin/protected/ComplaintPage.jsx";

export const routes = [
    {
        component: Main,
        path: MAIN_ROUTE
    },
    {
        component: SpecialistsPage,
        path: SPECIALISTS_ROUTE
    },
    {
        component: ConstructorPage,
        path: CONSTRUCTOR_ROUTE
    },
    {
        component: Patterns,
        path: PATTERNS_ROUTE
    },
    {
        component: Specialist,
        path: SPECIALIST_ROUTE,
        children: [
            {
                component: SpecialistFeedbacks,
                path: FEEDBACKS_ROUTE
            }
        ]
    },
    {
        component: Login,
        path: LOGIN_ROUTE
    },
    {
        component: Registration,
        path: REGISTER_ROUTE
    },
    {
        component: AboutUs,
        path: ABOUT_ROUTE
    },
    {
        component: ServicesPage,
        path: SERVICES_ROUTE
    },
    {
        component: ServicePage,
        path: SERVICE_ROUTE
    },
    {
        component: UsuallyQuestionsPage,
        path: USUALLY_QUESTIONS_ROUTE
    }
]

export const protectedRoutes = [
    {
        component: Admin,
        path: ADMIN_ROUTE,
        children: [
            {
                component: Dashboard,
                path: DASHBOARD_ROUTE
            },
            {
                component: Profile,
                path: PROFILE_ROUTE
            },
            {
                component: Chat,
                path: CHAT_ROUTE
            },
            {
                component: Support,
                path: SUPPORT_ROUTE
            },
            {
                component: Users,
                path: USERS_ROUTE
            },
            {
                component: Complaints,
                path: COMPLAINTS_ROUTE
            },
            {
                component: ComplaintPage,
                path: COMPLAINTS_PAGE_ROUTE
            },
            {
                component: BecomeLawyer,
                path: BECOME_LAWYER_ROUTE
            },
            {
                component: Services,
                path: ADMIN_SERVICES_ROUTE
            },
            {
                component: Permissions,
                path: PERMISSIONS_ROUTE
            },
            {
                component: TemplateCategories,
                path: TEMPLATE_CATEGORIES_ROUTE
            },
            {
                component: DocumentConstructor,
                path: DOCUMENT_CONSTRUCTOR_ROUTE
            },
            {
                component: EditDocumentConstructor,
                path: EDIT_DOCUMENT_CONSTRUCTOR_ROUTE
            },
            {
                component: TemplateDocuments,
                path: TEMPLATE_DOCUMENTS_ROUTE
            },
            {
                component: AdminUsuallyQuestions,
                path: ADMIN_USUALLY_QUESTION_ROUTE
            }
        ]
    }
]