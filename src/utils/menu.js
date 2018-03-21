export const allMenu = [{
  name: '数据可视化',
  url: 'visualization',
  icon: 'dashboard',
  children: [
    { name: '地图', url: 'maps' },
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
    { name: '小应用', url: 'tools' },
    { name: '富文本编辑器', url: 'editor' },
    { name: '待办事项', url: 'todoList' },
  ],
}]