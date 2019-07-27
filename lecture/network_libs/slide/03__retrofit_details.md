<!-- .slide:    data-transition="slide-in fade-out" -->

## Retrofit

- Библиотека - REST-клиент
- Декларативное описание взаимодействия с REST API
- Синхронные и асинхронные вызовы
- Встроенная интеграция с другими библиотеками
    + Парсеры(`GSON`, `SimpleXML`)
    + `OkHttp`(по умолчанию), `HttpUrlConnection`
    + `RxJava`

------

<!-- .slide:    data-transition="fade" -->

## Retrofit - доступные аннотации

- `@GET @POST @PUT @DELETE`
- `@Path @Field @Body @Query` 
- `@Multipart` + `@Part`
- `@FormUrlEncoded`
- `@Headers`

