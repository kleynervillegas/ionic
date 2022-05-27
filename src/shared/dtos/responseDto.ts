/**
 * App Interface
 *
 * @interface ResponseDTO
 * @status {number} status de la aplicacion, este va en conjunto al Codigo del status
 * @message {string} Mensaje de la aplicacion, este sera el encargado de enviar mensajes de notificacion
 * unknown = no tiene un tipo de datos en particular, se puede decir que es un tipo de datos generico y dinamico
 * @data {unknown} Data de la aplicacion, esta data puede tomar 2 valores (NULL ó Valor de la base de datos)
 */

export interface ResponseDTO {

  code?: number;
  data?: unknown;
  expiresIn?: number;
  message?: string;
  status?: string;
  token?: string;
  tokenType?: string;
  count?: number;
  skip?: number;
  limit?: number;
}
