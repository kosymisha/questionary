import React from "react";
import NewSurvey from "./pages/components/NewSurvey";

export default {
    newSurvey: {
        id: "newSurvey",
        path: "/new-survey",
        label: "New Survey",
        component: NewSurvey,
        isExact: false
    },
    mySurveys: {
        id: "mySurvey",
        path: "My Surveys",
        label: "/my-surveys",
        component: NewSurvey,
        isExact: false
    },
    surveyTemplates: {
        id: "surveyTemplates",
        path: "My Surveys",
        label: "/my-surveys",
        component: NewSurvey,
        isExact: false
    },
    users: {
        id: "users",
        path: "users",
        label: "Users",
        component: NewSurvey,
        isExact: false
    }
}