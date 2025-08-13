import React from "react";
import ReactECharts from "echarts-for-react";

const EchartDemo = ({choosetype="bar" , get_data=[]}) =>{

  const option = {
    title: {
      text: "ECharts 示例"
    },
    tooltip: {},
    xAxis: {
      data: get_data.length>0? get_data.map(item=>item.month): ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"] 
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: choosetype, // 可以通过 choosetype prop 来动态设置图表类型
        data: get_data.length>0? get_data.map(item=>item.monthly_sales): [5, 20, 36, 10, 10, 20]
      }
    ]
  };

  return <ReactECharts option={option} />
  
};

export default EchartDemo;