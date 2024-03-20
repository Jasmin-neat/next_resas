import React, { useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Highcharts, { SeriesLineOptions } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { selectPopulation } from '@/store';
import { dashStyles } from '@/constant/url';
import { Info } from '@/constant/types';

export default function Chart() {
  const { infos, age, prefectures } = useSelector(selectPopulation);

  const mapPopulationInfoToChartData = useCallback(
    (info: Info, index: number): SeriesLineOptions => {
      const prefName = prefectures.find(
        (prefecture) => prefecture.prefCode === info.prefCode,
      )?.prefName;
      const dataValues = info.data
        .find((data) => data.label === age)
        ?.data.map((item) => item.value);

      return {
        type: 'line',
        name: prefName,
        data: dataValues,
        dashStyle: dashStyles[index % dashStyles.length],
      };
    },
    [prefectures, age],
  );

  const chartOptions = useMemo(() => {
    const yearCategories =
      infos[0]?.data[0].data.map((item) => item.year.toString()) || [];
    const chartData = infos.map(mapPopulationInfoToChartData);

    const options: Highcharts.Options = {
      title: {
        text: '人口統計資料',
      },

      xAxis: {
        title: {
          text: '年度',
        },
        categories: yearCategories,
      },

      yAxis: {
        title: {
          text: '人口数',
        },
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },

      accessibility: {
        enabled: false,
      },

      series: chartData,

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 768,
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
              },
            },
          },
        ],
      },
    };

    return options;
  }, [infos, mapPopulationInfoToChartData]);

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
}
