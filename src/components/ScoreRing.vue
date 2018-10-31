<template>
    <div :style="style">
        <v-chart :options="option" ></v-chart>
        <button @click="test">🌚</button>
    </div>

</template>

<script>
import ECharts from "vue-echarts/components/ECharts"
import "echarts/lib/chart/pie"

export default {
    components: {
        "v-chart": ECharts
    },
    name: "ScoreRing",
    data: () => {
        let config = {
            chartColor: "rgb(0, 150, 255)",
            chartHeight: "800px",
            chartWidth: "800px",
            innerRadius: "60%",
            outerRadius: "70%",
            fontSize: 100,
            textColor: "rgb(0, 0, 255)"
        }

        let data = [
            {
                value: 0,
                name: "score",
                label: {
                    show: false
                },
                itemStyle: {
                    color: config.chartColor
                }
            },
            {
                value: 100,
                name: "blank",
                label: {
                    show: false
                },
                itemStyle: {
                    opacity: 0
                }
            }
        ]

        for (let count = 0; count <= 100; count++) {
            data.push({
                value: 0,
                name: count.toString(),
                label: {
                    show: false,
                    position: "center",
                    textStyle: {
                        fontSize: config.fontSize,
                        color: config.textColor
                    }
                }
            })
        }

        data[2].label.show = true

        return {
            option: {
                series: [
                    {
                        type: "pie",
                        radius: [config.innerRadius, config.outerRadius],
                        avoidLabelOverlap: false,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: data,
                        silent: true
                    }
                ]
            },
            style: {
                height: config.chartHeight,
                width: config.chartWidth
            },
            display: 0
        }
    },
    methods: {
        test() {
            let self = this
            setInterval(function() {
                self.option.series[0].data[self.display + 2].label.show = false
                let score = Math.round(Math.random() * 100)
                self.option.series[0].data[0].value = score
                self.option.series[0].data[1].value = 100 - score
                self.option.series[0].data[score + 2].label.show = true
                self.display = score
            }, 1000)
        }
    }
}
</script>

<style scoped>
button {
    width: 50px;
    height: 50px;
    font-size: 24px;
}
.echarts {
    width: 100%;
    height: 100%;
}
</style>
