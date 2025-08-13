import React from 'react';
import EchartDemo from './EchartDemo';
import {Menu} from 'antd';

function App() {
  const [whichtype, setWhichtype] = React.useState("bar");
  const [saledata, setSaledata] = React.useState([]);

  // 定义菜单项点击处理函数
  const handleMenuClick = (e) => {
    setWhichtype(e.key);
  };

  // 数据获取
  React.useEffect(() => {
    // 从后端获取数据
    const fetchData = async () => {
      try {
      const response = await fetch('http://localhost:5000/java');
      const result = await response.json();
      setSaledata(result);
      } catch (error) {
      console.error('数据获取失败:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <div className="App">
      <header className="App-header">

        <h1>Welcome to EchartDemo and AntDesign App</h1>

      </header>
 
      <Menu mode="horizontal" onClick={handleMenuClick}>
        <Menu.Item key="bar">柱状图</Menu.Item>
        <Menu.Item key="line">折线图</Menu.Item>
        <Menu.Item key="pie">饼图</Menu.Item>
      </Menu>
      <EchartDemo  choosetype={whichtype} get_data={saledata}/>
    </div>
  );
}

export default App;
