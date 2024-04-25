import { useState } from "react";
import { Grid, TextField, Select, MenuItem, InputLabel, Button } from "@mui/material";
import styles from "./Cadastro.module.css";

function Cadastro() {
    const [novaTrilha, setNovaTrilha] = useState()
    const ufs = [
        { label: "Escolha...", value: "" },
        { label: "AC", value: "AC" },
        { label: "AL", value: "AL" },
        { label: "AP", value: "AP" },
        { label: "AM", value: "AM" },
        { label: "BA", value: "BA" },
        { label: "CE", value: "CE" },
        { label: "DF", value: "DF" },
        { label: "ES", value: "ES" },
        { label: "GO", value: "GO" },
        { label: "MA", value: "MA" },
        { label: "MT", value: "MT" },
        { label: "MS", value: "MS" },
        { label: "MG", value: "MG" },
        { label: "PA", value: "PA" },
        { label: "PB", value: "PB" },
        { label: "PR", value: "PR" },
        { label: "PE", value: "PE" },
        { label: "PI", value: "PI" },
        { label: "RJ", value: "RJ" },
        { label: "RN", value: "RN" },
        { label: "RS", value: "RS" },
        { label: "RO", value: "RO" },
        { label: "RR", value: "RR" },
        { label: "SC", value: "SC" },
        { label: "SP", value: "SP" },
        { label: "SE", value: "SE" },
        { label: "TO", value: "TO" },
    ];

  const dificuldades = [
    { label: "Iniciante", value: "Iniciante" },
    { label: "Intermediário", value: "Intermediário" },
    { label: "Experiente", value: "Experiente" },
  ];

  return (
    <div className={styles.divContainer}>
    <div className={styles.container}>
        <h1>Cadastro de nova trilha</h1>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "600px",
          marginTop: "12px",
          marginBottom: "12px",
        }}
      >
        <Grid item xs={12}>
          <InputLabel htmlFor="name">Nome da trilha</InputLabel>
          <TextField
            id="name"
            type="text"
            placeholder="Informe o nome da trilha"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel htmlFor="duration">Duração estimada (min)</InputLabel>
          <TextField
            id="duration"
            type="number"
            placeholder="Informe a duração estimada"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel htmlFor="route">Trajeto (km)</InputLabel>
          <TextField
            id="route"
            type="number"
            placeholder="Informe o Trajeto"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel htmlFor="city">Cidade</InputLabel>
          <TextField
            id="city"
            type="text"
            placeholder="Informe a cidade"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel htmlFor="state">Estado</InputLabel>
          <Select
            id="state"
            type="text"
            placeholder="Informe o estado"
            defaultValue={""}
            fullWidth
          >
            {ufs.map((uf) => (
              <MenuItem key={uf.value} value={uf.value}>
                {uf.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={6}>
          <InputLabel htmlFor="create">Criado por</InputLabel>
          <TextField
            id="create"
            type="text"
            placeholder="Informe o criador"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel htmlFor="difficulty">Dificuldade</InputLabel>
          <Select
            id="difficulty"
            type="text"
            placeholder="Informe a dificuldade"
            fullWidth
          >
            {dificuldades.map((dificuldade) => (
              <MenuItem key={dificuldade.value} value={dificuldade.value}>
                {dificuldade.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="type">Tipo de trilha</InputLabel>
          <TextField
            id="type"
            type="text"
            placeholder="Informe o tipo de trilha"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="url">URL da imagem</InputLabel>
          <TextField
            id="url"
            type="text"
            placeholder="Insira a URL da imagem"
            fullWidth
          />
        </Grid>
      </Grid>
      <div>
        <button className={styles.registerButton}>Cadastrar</button>
        <button className={styles.cancelButton}>Voltar</button>
      </div>
    </div>
    </div>
  );
}

export default Cadastro;
