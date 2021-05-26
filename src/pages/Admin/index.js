import React, { useState, useEffect } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import './style.less'
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

import { Route, Switch } from 'react-router-dom'
import AddArticle from '../AddArticle'
import ArticleList from '../ArticleList'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState('')
    const [openMenu, setOpenMenu] = useState('')

    const onCollapse = collapsed => {
        // console.log(collapsed)
        setCollapsed(collapsed)
    };

    const handleClickArticle = e => {
        console.log(e.key)
        props.history.push(e.key)
        //处理展开和收起
        setSelectedMenu(e.key)
        // switch (e.key) {
        //     case 'addArticle':
        //         props.history.push('/index/add') 
        //         break;s
        //     default:
        //         props.history.push('/index/list')
        // }
    }

    const onTitleClick=e=>{
        console.log(e)
        openMenu==e.key?setOpenMenu(''):setOpenMenu(e.key)
    }




    useEffect(() => {
        const currentPath = props.location.pathname
        const subStr = currentPath.substring(0, currentPath.indexOf('/', currentPath.indexOf('/') + 1));  //截取第二个/之前的路径判断是否为一级
        //判断当前路径是否是二级路由还是一级  二级就打开一级  一级就不打开
        currentPath == subStr ? (setOpenMenu('')) : (setOpenMenu(subStr))
        console.log(subStr)
        console.log(currentPath)
        setSelectedMenu(currentPath)
    }, [])


    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark"
                    defaultSelectedKeys={[selectedMenu]}
                    defaultOpenKeys={[openMenu]}
                    selectedKeys={[selectedMenu]}
                    openKeys={[openMenu]}
                    mode="inline">
                    <Menu.Item key="/index/key" icon={<PieChartOutlined />} onClick={handleClickArticle}>
                        工作台
                   </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        添加文章
                   </Menu.Item>
                    <SubMenu key="/index" icon={<UserOutlined />} title="文章管理" onTitleClick={onTitleClick}>
                        <Menu.Item key="/index/add" onClick={handleClickArticle}>添加文章</Menu.Item>
                        <Menu.Item key="/index/list" onClick={handleClickArticle}>文章列表</Menu.Item>

                    </SubMenu>

                    <Menu.Item key="9" icon={<FileOutlined />}>
                        留言管理
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>后台管理系统</Breadcrumb.Item>
                        <Breadcrumb.Item>工作台</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <div>
                            <Route path="/index" exact component={AddArticle} />
                            <Route path="/index/add" exact component={AddArticle} />
                            <Route path="/index/list" exact component={ArticleList} />
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>wxq.com</Footer>
            </Layout>
        </Layout>
    );

}

export default Admin