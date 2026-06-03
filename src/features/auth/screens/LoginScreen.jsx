import {
    View,
    Text,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Alert
} from 'react-native';

import { useForm, Controller } from 'react-hook-form';
import { COLORS, SPACING, FONT_SIZE } from '../../../shared/constants/theme';
import Input from '../../../shared/components/common/Input';
import Button from '../../../shared/components/common/Button';
import kinalSportsLogo from "../../../../assets/kinal_sports1.png"


const LoginScreen = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            emailOrUsername: "",
            password: ""
        }
    });

    const onSubmit = (data) => {

    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <Image
                        source={kinalSportsLogo}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.subtitle}> Bienvenido de Nuevo </Text>
                    <View style={styles.form}>
                        <Controller
                            control={control}
                            rules={{ required: "Email o usuario requerido" }}
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    label="Email o Usuario"
                                    placeholder="correo@ejemplo.com o usuario"
                                    onChangeText={onChange}
                                    value={value}
                                    autoCapitalize="none"
                                    error={errors.emailOrUsername?.message}
                                />
                            )}
                            name="emailOrUsername"
                        />
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        flexGrow: 1,
        padding: SPACING.xl,
        justifyContent: "center",
    },
    header: {
        alignItems: "center",
        marginBottom: SPACING.xxl,
    },
    logo: {
        height: 80,
        width: 200,
        marginBottom: SPACING.sm,
    },
    subtitle: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.secondary,
        marginTop: SPACING.sm,
    },
    form: {
        width: "100%",
    },
    button: {
        marginTop: SPACING.lg,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: SPACING.xl,
    },
    footerText: {
        fontSize: FONT_SIZE.md,
        color: COLORS.textLight,
    },
    link: {
        fontSize: FONT_SIZE.md,
        color: COLORS.primary,
        fontWeight: "700",
    },
});


export default LoginScreen;