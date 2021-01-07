import _ from 'lodash'
import { FC, useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Row, Col, Typography, Button, Space, Table } from 'antd'
import { useStateWithPaths } from '../../../../utilities/hooks/useConnect'
import { retrieveAvailableBooks } from '../../../../redux/actions/action_crud_page'

import './record-listing.less'
import { TABLE_COLS_CONFIG } from '../../config'
import { TableCols } from '../../../../modals/crud'

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

  const onEdit = useCallback(() => {
    return null
  }, [dispatch])

  const onDelete = useCallback(() => {
    return null
  }, [dispatch])

  const columns = useMemo(() => {
    const recordColumns = _.map(TABLE_COLS_CONFIG, (col: TableCols) => {
      return {
        title: col.title,
        dataIndex: col.accessor,
        key: col.accessor,
      }
    })
    const actionColumn = {
      title: '',
      key: 'action',
      render: () => (
        <Space align="end">
          <Button type="default" onClick={onEdit}>
            Edit
          </Button>
          <Button type="default" onClick={onDelete}>
            Delete
          </Button>
        </Space>
      ),
    }
    return [...recordColumns, actionColumn]
  }, [])

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
