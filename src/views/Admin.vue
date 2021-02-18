<template>
    <div class="home">
        <button class="wew" v-on:click="logout">Logout</button>
        <br/>
        <br/>
        <button class="wew" v-on:click="accounts">Accounts</button>
        <p class="series" id="qwert"></p>
        <p class="series" id="asdf"></p>
        <div>
            <tabs :options="{ useUrlFragment: false }">
                <tab name="Last 7 Days">
                    <column-chart
			xtitle="Date"
                        ytitle="Total Amount"  
                        :refresh="60"                   
                        id= "week-chart"
                        :data="chartDataWeek"
                    ></column-chart>
                </tab>
                <tab name="Last 30 Days">
                    <column-chart
			xtitle="Date"
                        ytitle="Total Amount"  
                        :refresh="60"                   
                        id= "month-chart"
                        :data="chartDataMonth"
                    ></column-chart>
                </tab>
                <tab name="All Time">
                    <column-chart 
			:refresh="60"                   
                        id= "all-chart"
			:data="chartData"
			xtitle="Date"
                        ytitle="Total Amount"
		></column-chart>
                </tab>
            </tabs>
        </div>
    </div>
</template>

<script src="./admin.js"></script>
<style scoped>
.wew {
    float: right;
}
.qwew {
    float: right;
}
p.clear {
    clear: both;
}
.series{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;

}
</style>
