import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Grid, TextField, Select, MenuItem, InputLabel } from "@mui/material";
import styles from "./Cadastro.module.css";
import { useContext } from "react";
import { TrilhasContext } from "../../context/TrilhasContext";

function Cadastro() {
  const { addTrilha } = useContext(TrilhasContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    { label: "Intermediário", value: "Intermediario" },
    { label: "Difícil", value: "Difícil" },
  ];

  const tipos = [
    { label: "Caminhada", value: "Caminhada" },
    { label: "Trekking", value: "Trekking" },
  ];

  function onSubmit(formValue) {
    console.log(formValue);
    addTrilha(formValue)
  }

  
  return (
    <div className={styles.divContainer}>
      <div className={styles.container}>
        <h1>Cadastro de nova trilha</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              <InputLabel htmlFor="nome">Nome da trilha</InputLabel>
              <TextField
                id="nome"
                type="text"
                placeholder="Informe o nome da trilha"
                fullWidth
                {...register("nome", {
                  required: "Insira um nome válido para a trilha",
                  maxLength: { value: 100, message: "Nome muito longo" },
                })}
              />
            {errors?.nome && (
              <p className={styles.errorMessage}>{errors.nome.message}</p>
            )}
            </Grid>

            <Grid item xs={6}>
              <InputLabel htmlFor="duracao">Duração estimada (min)</InputLabel>
              <TextField
                id="duracao"
                type="number"
                placeholder="Informe a duração estimada"
                fullWidth
                {...register("duracao", {
                  required: "Insira um duração válida",
                  maxLength: { value: 4, message: "Tempo acima do limite" },
                })}
              />
              {errors?.duracao && (
                <p className={styles.errorMessage}>{errors.duracao.message}</p>
              )}
            </Grid>

            <Grid item xs={6}>
              <InputLabel htmlFor="trajeto">Trajeto (km)</InputLabel>
              <TextField
                id="trajeto"
                type="number"
                placeholder="Informe o Trajeto"
                fullWidth
                {...register("trajeto", {
                  required: "Insira um trajeto válido",
                  maxLength: { value: 5, message: "Trajeto acima do limite" },
                })}
              />
            {errors?.trajeto && (
              <p className={styles.errorMessage}>{errors.trajeto.message}</p>
            )}
            </Grid>

            <Grid item xs={6}>
              <InputLabel htmlFor="cidade">Cidade</InputLabel>
              <TextField
                id="cidade"
                type="text"
                placeholder="Informe a cidade"
                fullWidth
                {...register("cidade", {
                  required: "Insira uma cidade válida",
                  maxLength: {
                    value: 60,
                    message: "Nome da cidade acima do limite",
                  },
                })}
              />
            {errors?.cidade && (
              <p className={styles.errorMessage}>{errors.cidade.message}</p>
            )}
            </Grid>

            <Grid item xs={6}>
              <InputLabel htmlFor="estado">Estado</InputLabel>
              <Select
                id="estado"
                type="text"
                placeholder="Informe o estado"
                defaultValue={""}
                fullWidth
                {...register("estado", {
                  required: "Insira um estado válido",
                  maxLength: { value: 2, message: "UF de estado inválida" },
                })}
              >
                {ufs.map((uf) => (
                  <MenuItem key={uf.value} value={uf.value}>
                    {uf.label}
                  </MenuItem>
                ))}
              </Select>
            {errors?.estado && (
              <p className={styles.errorMessage}>{errors.estado.message}</p>
            )}
            </Grid>

            <Grid item xs={6}>
              <InputLabel htmlFor="criador">Criado por</InputLabel>
              <TextField
                id="criador"
                type="text"
                placeholder="Informe o criador"
                fullWidth
                {...register("criador", {
                  required: "Insira um nome de criador válido",
                  maxLength: { value: 60, message: "Nome muito longo" },
                })}
              />
            {errors?.criador && (
              <p className={styles.errorMessage}>{errors.criador.message}</p>
            )}
            </Grid>

            <Grid item xs={6}>
              <InputLabel htmlFor="dificuldade">Dificuldade</InputLabel>
              <Select
                id="dificuldade"
                type="text"
                placeholder="Informe a dificuldade"
                fullWidth
                {...register("dificuldade", {
                  required: "Insira uma dificuldade válida",
                  maxLength: { value: 20, message: "Dificuldade inválida" },
                })}
              >
                {dificuldades.map((dificuldade) => (
                  <MenuItem key={dificuldade.value} value={dificuldade.value}>
                    {dificuldade.label}
                  </MenuItem>
                ))}
              </Select>
            {errors?.dificuldade && (
              <p className={styles.errorMessage}>{errors.dificuldade.message}</p>
            )}
            </Grid>

            <Grid item xs={12}>
              <InputLabel htmlFor="tipo">Tipo de trilha</InputLabel>
              <Select
                id="tipo"
                type="text"
                placeholder="Informe o tipo de trilha"
                fullWidth
                {...register("tipo", {
                  required: "Insira um tipo válido",
                  maxLength: { value: 10, message: "Tipo inválido" },
                })}
              >
                {tipos.map((tipo) => (
                  <MenuItem key={tipo.value} value={tipo.value}>
                    {tipo.label}
                  </MenuItem>
                ))}
              </Select>
            {errors?.tipo && (
              <p className={styles.errorMessage}>{errors.tipo.message}</p>
            )}
            </Grid>

            <Grid item xs={12}>
              <InputLabel htmlFor="url">URL da imagem</InputLabel>
              <TextField
                id="url"
                type="text"
                placeholder="Insira a URL da imagem"
                fullWidth
                {...register("url", {
                  maxLength: { value: 300, message: "URL inválida" },
                })}
              />
            {errors?.url && (
              <p className={styles.errorMessage}>{errors.url.message}</p>
            )}
            </Grid>
          </Grid>
          <div>
            <button type="submit" className={styles.registerButton}>
              Cadastrar
            </button>
            <button className={styles.cancelButton}>
              <Link to="/">Voltar</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
