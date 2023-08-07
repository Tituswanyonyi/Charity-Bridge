import React from "react";
import { Admin, Resource, AppBar, Layout, UserMenu } from "react-admin";
import restProvider from "ra-data-simple-rest";
import MyLogoutButton from "./MyLogoutButton";
import AdminLogin from "./AdminLogin";
import authProvider from "./authProvider";

const MyUserMenu = () => <UserMenu><MyLogoutButton/></UserMenu>;
const MyAppBar = () =>  <AppBar UserMenu={<MyUserMenu/>}/>;
const MyLayout= (props) => <Layout{...props} appBar={MyAppBar}/>;

function AdminApp() {

    return (

        <Admin loginPage ={AdminLogin} layout={MyLayout} dataProvider={restProvider('')} authProvider ={authProvider} >
            
        </Admin>
    )
}
export default AdminApp