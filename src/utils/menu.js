import Maps from '../pages/maps'
import TodoList from '../pages/todoList'

export const allMenu = [{
  name: '数据可视化',
  url: 'visualization',
  icon: 'dashboard',
  children: [
    { name: '图表', url: 'maps', default: true, component: Maps },
  ]
}, {
  name: '工作流',
  url: 'workflow',
  icon: 'schedule',
  children: [
    { name: '创建', url: 'create' },
  ],
}, {
  name: '工具模块',
  url: 'tool',
  icon: 'tool',
  children: [
    { name: '待办事项', url: 'todoList', component: TodoList },
  ],
}]

export function defaultPath() {
  for (let menu of allMenu) {
    if (menu.default) {
      return encodePath(menu.url);
    }
    if (menu.children && menu.children.length) {
      for (let subMenu of menu.children) {
        if (subMenu.default) {
          return encodePath(menu.url, subMenu.url);
        }
      }
    }
  }
}

export function encodePath() {
  let result = "";
  for (let index in arguments) {
    result += "/" + arguments[index];
  }
  return result;
}

export function decodePath(path) {
  let res = path.split("/");
  if (res.length >= 2) {
    return { url: res[2], parent: res[1] }
  }
  return { url: res[1] }
}