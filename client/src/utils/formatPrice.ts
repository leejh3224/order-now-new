export default (value: number) => {
  return `${new Intl.NumberFormat('en-US').format(value)} 원`
}
