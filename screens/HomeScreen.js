import React from 'react'; 
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, Dimensions} from 'react-native';
import GradientButton from 'react-native-gradient-buttons-improved';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";
import Carousel from 'react-native-reanimated-carousel';

const chartConfig = {
    backgroundGradientFrom: "#1DB954",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#00f3ff",
    backgroundGradientToOpacity: 0.25,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
};

const screenWidth = Dimensions.get("window").width/1.1

const data = {
    labels: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
        {
            data: [112, 83, 80, 110, 95, 78, 120],
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
            strokeWidth: 2 // optional
        }
    ],
    legend: ["Average BPM"] // optional
};

const commitsData = [
    { date: "2022-01-02", count: 1 },
    { date: "2022-01-03", count: 2 },
    { date: "2022-01-04", count: 3 },
    { date: "2022-01-05", count: 4 },
    { date: "2022-01-06", count: 5 },
    { date: "2022-01-30", count: 2 },
    { date: "2022-01-31", count: 3 },
    { date: "2022-03-01", count: 2 },
    { date: "2022-04-02", count: 4 },
    { date: "2022-03-05", count: 2 },
    { date: "2022-02-30", count: 4 }
];

// each value represents a goal ring in Progress chart
const ProgressChartData = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
};

export default function HomeScreen({ navigation }) {
    return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <Image 
            source={require('../assets/NFCGymAppLogo.png')}
            style={styles.backgroundImage}
            />
            <Text style={styles.heading}>NFC Gym App Prototype</Text>
            
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 24}}>
                <GradientButton
                style={{ marginVertical: 8 }}
                text="Workouts"
                textStyle={{ fontSize: 20 }}
                gradientBegin="#1DB954"
                gradientEnd="#00f3ff"
                gradientDirection="diagonal"
                height={60}
                width={300}
                radius={15}
                impact
                impactStyle='Light'
                onPressAction={() => navigation.navigate("Workouts")}
                />
                <GradientButton
                style={{ marginVertical: 8 }}
                text="Nutrition"
                textStyle={{ fontSize: 20 }}
                gradientBegin="#1DB954"
                gradientEnd="#00f3ff"
                gradientDirection="diagonal"
                height={60}
                width={300}
                radius={15}
                impact
                impactStyle='Light'
                onPressAction={() => navigation.navigate("Nutrition")}
                />
                <GradientButton
                style={{ marginVertical: 8 }}
                text="Progress"
                textStyle={{ fontSize: 20 }}
                gradientBegin="#1DB954"
                gradientEnd="#00f3ff"
                gradientDirection="diagonal"
                height={60}
                width={300}
                radius={15}
                impact
                impactStyle='Light'
                onPressAction={() => navigation.navigate("Progress")}
                />
                <GradientButton
                style={{ marginVertical: 8 }}
                text="Live Tracking"
                textStyle={{ fontSize: 20 }}
                gradientBegin="#1DB954"
                gradientEnd="#00f3ff"
                gradientDirection="diagonal"
                height={60}
                width={300}
                radius={15}
                impact
                impactStyle='Light'
                onPressAction={() => navigation.navigate("LiveTracking")}
                />
            </View>
            
            <View style={ styles.carousel }>
            <Text style={styles.carouselText}>Your Stats</Text>

            <Carousel
            loop
            width={screenWidth}
            height={300}
            autoPlay={false}
            data={[...new Array(3).keys()]}
            scrollAnimationDuration={1000}
            renderItem={({ index }) => {
                if (index === 0) {
                    return (
                    <ProgressChart
                    text={'Test'}
                    style={styles.charts}
                    data={ProgressChartData}
                    width={screenWidth}
                    height={220}
                    strokeWidth={16}
                    radius={32}
                    chartConfig={chartConfig}
                    hideLegend={false}
                    />
                )
            } else if (index === 1) {
                return (
                <LineChart
                style={styles.charts}
                data={data}
                width={screenWidth}
                height={190}
                chartConfig={chartConfig}
                />
                )
            }
            else if (index === 2) {
                return (
                <ContributionGraph
                style={styles.charts}
                values={commitsData}
                endDate={new Date("2022-04-01")}
                numDays={110}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                />
                )}
            }}
            />
        </View>
        </ScrollView>
        </SafeAreaView>
        );
    }
            
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#191414',
        },
        backgroundImage: {
            width: 200,
            height: 200,
            resizeMode: 'contain',
            alignSelf: 'center',
        },
        heading: {
            fontSize: 24,
            fontWeight: '100',
            color: 'white',
            textAlign: 'center',
            marginTop: 20,
        },
        optionsContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 40,
        },
        optionButton: {
            width: '30%',
            backgroundColor: '#1DB954',
            padding: 10,
            margin: 10,
            borderRadius: 10,
        },
        optionText: {
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
        },
        carousel: {
            borderRadius: 15,
        },
        carouselText:{
            color: 'white',
            fontSize: 20,
            fontWeight: '200',
            marginBottom: 10,
            marginLeft: 5
        },
        charts: {
            borderRadius: 15,
            justifyContent: 'space-evenly', 
        },
    });
