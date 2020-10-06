import { Container, Grid, Typography, TextField, Button } from '@material-ui/core';
import { useState } from 'react';
import styles from './Calculator.module.scss'

function Calculator() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState();

    function handleAltura({ target: {value} }) {
        setAltura(value)
    }

    function handlePeso({ target: {value} }) {
        setPeso(value)
    }

    function calculateIMC() {
        const alturaM = altura/100
        
        setImc((peso/(alturaM*alturaM)).toFixed(2))
    } 

    function verifyImc() {
        if(imc < 18.5){
            return "Abaixo do Peso."
        }

        if(imc < 24.9){
            return "Peso normal."
        }

        if(imc < 29.9){
            return "Sobrepeso."
        }

        if(imc < 34.9){
            return "Obesidade grau 1."
        }

        if(imc < 39.9){
            return "Obesidade grau 2."
        }
        return "Obesidade grau 3."
    }
    return (
        <div className={styles.calculator}>
            <Container maxWidth="xs">
                <Typography style={{ marginTop: -25 }} variant="h3">Calculadora</Typography>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <TextField 
                            label="Altura em cm" 
                            variant="filled" 
                            fullWidth 
                            type="number" 
                            value={altura} 
                            onChange={handleAltura} 
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            label="Peso em Kg" 
                            variant="filled" 
                            fullWidth 
                            type="number" 
                            value={peso}
                            onChange={handlePeso} 
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={calculateIMC} fullWidth>Calcular</Button>
                    </Grid>
                    {
                        imc &&
                        <Grid item>
                            <Typography>O seu IMC é: {imc} Kg/m2 - {verifyImc()} </Typography>
                        </Grid>
                    }
                    
                </Grid>
            </Container>
        </div>
    );
}

export default Calculator;