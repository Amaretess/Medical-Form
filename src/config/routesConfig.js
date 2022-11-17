import Home from "../pages/Home";
import Form from "../pages/MedicalForm";
import Details from "../pages/Details";

export const routesConfig = [
    {
        id: 1,
        path: "/",
        element: <Home />
    },
    {
        id: 2,
        path: "/medical-form",
        element: <Form />
    },
    {
        id: 3,
        path: "/details/:data",
        element: <Details />
    }
]

export const talk = () => {
    console.log("talk");
}