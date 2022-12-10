import { StyleSheet, Text, TextInput, View, Image, Button, Alert, ScrollView, SafeAreaView, Dimensions} from 'react-native';
import GradientButton from 'react-native-gradient-buttons-improved';
import { useForm, Controller } from "react-hook-form";

export default function NutritionScreen({ navigation }) {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: ''
        }
    });
    const onSubmit = data => console.log(data);

        return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image
                source={require('../assets/NFCGymAppLogo.png')}
                style={styles.backgroundImage}
                />
                <Text style={styles.heading}>Nutrition</Text>
                
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 24}}>
                <GradientButton
                    style={{ marginVertical: 8 }}
                    text="Home"
                    textStyle={{ fontSize: 20 }}
                    gradientBegin="#1DB954"
                    gradientEnd="#00f3ff"
                    gradientDirection="diagonal"
                    height={60}
                    width={300}
                    radius={15}
                    impact
                    impactStyle='Light'
                    onPressAction={() => navigation.navigate("Home")}
                    />

                    </View>
                    
                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Food name</Text>
                        <Controller
                            control={control}
                            render={({field: { onChange, onBlur, value }}) => (
                            <TextInput
                                type="number"
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                            )}
                            name="foodName"
                            rules={{ required: true }}
                        />
                        <Text style={styles.label}>Calories</Text>
                        <Controller
                            control={control}
                            render={({field: { onChange, onBlur, value }}) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                            )}
                            name="calories"
                            rules={{ required: true }}
                        />
                        <Text style={styles.label}>Carbs</Text>
                        <Controller
                            control={control}
                            render={({field: { onChange, onBlur, value }}) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                            )}
                            name="carbs"
                            rules={{ required: true }}
                        />
                        <Text style={styles.label}>Fat</Text>
                        <Controller
                            control={control}
                            render={({field: { onChange, onBlur, value }}) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                            )}
                            name="fat"
                            rules={{ required: true }}
                        />
                        <Text style={styles.label}>Protein</Text>
                        <Controller
                            control={control}
                            render={({field: { onChange, onBlur, value }}) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                            )}
                            name="protein"
                            rules={{ required: true }}
                        />

                        <View style={styles.button}>
                            <Button
                            style={styles.buttonInner}
                            color
                            title="Log Food"
                            onPress={handleSubmit(onSubmit)}
                            />
                        </View>
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
                    fontWeight: 'bold',
                    color: '#1DB954',
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
                forms: {
                    color: '#000', 
                    borderRadius: 20,
                    backgroundColor: 'white',
                    justifyContent: 'space-evenly', 
                    alignItems: 'center', 
                    marginVertical: 5,
                    width: 375
                },
                label: {
                    color: '#1DB954',
                    fontWeight: 'bold',
                    margin: 20,
                    marginLeft: 0,
                  },
                  button: {
                    marginTop: 40,
                    color: 'white',
                    height: 40,
                    backgroundColor: '#1DB954',
                    borderRadius: 10,
                    width: 350,
                  },
                  formContainer: {
                    flex: 1,
                    justifyContent: 'center',
                    width: 375,
                    paddingLeft: 10,
                    paddingReft: 10,
                    backgroundColor: '#303030',
                    borderRadius: 20,
                  },
                  input: {
                    backgroundColor: 'white',
                    borderColor: 'none',
                    height: 40,
                    padding: 10,
                    width: 350,
                    borderRadius: 10,
                  },
            });
