import { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Row, Col, Typography, Button, Space, Table } from 'antd'
import { useStateWithPaths } from '../../../../utilities/hooks/useConnect'
import { retrieveAvailableBooks } from '../../../../redux/actions/action_crud_page'

import './record-listing.less'

/**
 *
 * RecordListing
 *
 */
const RecordListing: FC = () => {
  const dispatch = useDispatch()
  const { Title } = Typography
  const [booksRecord = []] = useStateWithPaths([`crudPageReducer.booksRecord`])

  const onApiRetrieve = useCallback(() => {
    dispatch(retrieveAvailableBooks())
  }, [dispatch])
  const columns = [
    {
      title: 'No',
      dataIndex: 'id',
      key: 'id',
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'No of items',
      dataIndex: 'noOfItems',
      key: 'noOfItems',
    },
    {
      title: '',
      key: 'action',
      render: () => (
        <Space size="middle">
          <span>edit</span>
          <span>delete</span>
        </Space>
      ),
    },
  ]

  return (
    <>
      <Row>
        <Col className="record-listing" span={24}>
          <Row align="middle" justify="start" gutter={[16, 16]}>
            <Col span={24}>
              <Title className="record-listing__title" level={2}>
                Records
              </Title>
            </Col>
          </Row>
          <Row align="middle" justify="start" gutter={[0, 18]}>
            <Col span={24} className="record-listing__btn-group">
              <Space size={16} className="record-listing__spacer">
                <Button type="primary">Add entry</Button>
                <Button type="default" onClick={onApiRetrieve}>
                  Retrieve entry from API
                </Button>
              </Space>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Table columns={columns} dataSource={booksRecord} rowKey="id" />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default RecordListing
