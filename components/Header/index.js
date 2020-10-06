import { Container, Grid, Typography } from '@material-ui/core';
import styles from './Header.module.scss';

function Header() {
    return (
        <div className={styles.header}>
            <Container fixed>
                <Grid container justify="center" alignItems="center" spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h3" className={styles.header__title}>Calcule o seu IMC</Typography>
                        <Typography>O IMC é o Índice de Massa Corporal, e
                            é utilizado para saber se
                            o peso está de acordo com a altura.
                        </Typography>
                    </Grid>
                    <Grid style={{ marginTop: -25 }} item xs={12} sm={6}>
                        <img src="/medic.png" alt="Médico e Paciente"/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Header;