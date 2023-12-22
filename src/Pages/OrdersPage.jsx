import { List } from "../components/List/List"
export const OrdersPage = ({ onClickClearOrders,path, items }) => {
  return <List onClickClearOrders={onClickClearOrders} path={path} items={items} />
}