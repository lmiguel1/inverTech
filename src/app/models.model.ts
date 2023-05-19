export interface UserI {
    nombre: string;
    edad: number;
    correo: string;
    uid: string;
    password: string;
    perfil: 'visitante' | 'admin',
}
