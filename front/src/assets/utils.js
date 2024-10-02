export const MAIN_ROUTE = '/'
export const LOGIN_ROUTE = '/login'
export const REGISTER_ROUTE = '/registration'
export const SPECIALISTS_ROUTE = '/specialists'
export const SPECIALIST_ROUTE = '/specialist/:id'
export const ADMIN_ROUTE = '/admin'
export const DASHBOARD_ROUTE = 'dashboard'
export const PROFILE_ROUTE = 'profile'
export const SUPPORT_ROUTE = 'support'
export const CHAT_ROUTE = 'chat'
export const ABOUT_ROUTE = '/about-us'
export const SERVICES_ROUTE = '/services'
export const SERVICE_ROUTE = '/service/:id'
export const USUALLY_QUESTIONS_ROUTE = '/usual-questions'
export const FEEDBACKS_ROUTE = ''
export const CONSTRUCTOR_ROUTE = 'constructor/:slug'
export const PATTERNS_ROUTE = 'patterns'
export const USERS_ROUTE = '/admin/users'
export const COMPLAINTS_ROUTE = '/admin/complaints'
export const COMPLAINTS_PAGE_ROUTE = '/admin/complaints/:id'
export const BECOME_LAWYER_ROUTE = '/admin/become-lawyer'
export const ADMIN_SERVICES_ROUTE = '/admin/admin-services'
export const PERMISSIONS_ROUTE = '/admin/permissions'
export const TEMPLATE_CATEGORIES_ROUTE = '/admin/template-categories'
export const ADMIN_USUALLY_QUESTION_ROUTE = '/admin/usually-questions'
export const DOCUMENT_CONSTRUCTOR_ROUTE = '/admin/document-constructor/:category_id/:subcategory_id'
export const EDIT_DOCUMENT_CONSTRUCTOR_ROUTE = '/admin/edit-document-constructor/:slug/:category_id/:subcategory_id'
export const TEMPLATE_DOCUMENTS_ROUTE = '/admin/template-documents/:category_id'

export const DOMAIN = 'https://api.huquq-kaliti.uz/'
// export const DOMAIN = 'http://192.168.1.46:8000/'
export const imgLeftAnimation = {
    hidden: {
        translateX: 0,
        translateY: 0,
        opacity: 0
    },
    visible: custom => ({
        translateX: 40,
        translateY: 40,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}
export const textLeftAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

export const textRightAnimation = {
    hidden: {
        x: 100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

export const textTopAnimation = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

export function formatText(text, maxLength) {
    const ellipsis = '...';

    if (text.length > maxLength) {
        return text.slice(0, maxLength - ellipsis.length) + ellipsis;
    }

    return text;
}

export const formatDate = (dateString, language) => {
    const date = new Date(dateString);

    const day = date.getDate();
    const year = date.getFullYear();

    const monthNames = {
        ru: [
            'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ],
        en: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ],
        uz: [
            'январ', 'феврал', 'март', 'апрел', 'май', 'июн',
            'июл', 'август', 'сентябр', 'октябр', 'ноябр', 'декабр'
        ],
        uz_l: [
            'yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun',
            'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'
        ]
    };

    const month = monthNames[language][date.getMonth()];

    switch (language) {
        case 'ru':
            return `${day} ${month} ${year} года`;
        case 'en':
            return `${month} ${day}, ${year}`;
        case 'uz':
            return `${day} ${month} ${year} йил`;
        case 'uz_l':
            return `${day} ${month} ${year} yil`;
        default:
            return `${day} ${month} ${year}`;
    }
};