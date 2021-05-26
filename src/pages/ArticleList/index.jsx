import React, { useState } from 'react'
import { List, Row, Col, Modal, Message, Button } from 'antd'
// import axios from 'axios'
// import api from '@services'
const { confirm } = Modal

const ArticleList = () => {

    const [list, setList] = useState([])


    return (
        <div>
            <List
                header={
                    <Row className="list-div">
                        <Col span={8}>
                            <b>标题</b>
                        </Col>
                        <Col span={4}>
                            <b>类别</b>
                        </Col>
                        <Col span={4}>
                            <b>发布时间</b>
                        </Col>
                        <Col span={4}>
                            <b>浏览量</b>
                        </Col>
                        <Col span={1}>
                            <b>操作</b>
                        </Col>

                    </Row>
                }
                bordered
                dataSource={list}
                renderItem={item => {
                    return (
                        <List.item>
                            <Row className="list-div">
                                <Col span={8}>
                                    {item.title}
                                </Col>
                                <Col span={4}>
                                    {item.typeName}
                                </Col>
                                <Col span={4}>
                                    {item.addTime}
                                </Col>
                                <Col span={4}>
                                    {item.view_count}
                                </Col>
                                <Col span={1}>
                                    <Button type="primary">修改</Button>
                                    <Button>删除</Button>
                                </Col>

                            </Row>
                        </List.item>
                    )
                }

                }
            />

        </div>
    )
}

export default ArticleList
