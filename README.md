# IBM Recipe - Visual recognition 
![](assets/visualrec.png)<br/> 

Aprende a crear un servicio de visual recognition para clasificar tacos y despliegalo en una app directamente a IBM Cloud!

## Prework:
* Cuenta de [IBM Cloud][url-IBMCLOUD].
* Instalar [CLI de IBM Cloud][url-CLI-IBMCLOUD].
* Cuenta en [GitHub][url-github-join].
* Instalar [CLI de GitHub][url-github-cli] o instalar [GitHub Desktop][url-githubdesktop].
* Instalar [NodeJS][url-node].
* Utilizar safari, chrome, firefox, edge.
* "Fork" y "Clone" a este repositorio. 

## Cupones para profesores y estudiantes:

* Acceder al portal de [IBM Academic Initiative][url-academic] y seleccionar la opción "Register now" si aun no tienes cuenta.
* Realizar el registro correspondiente utilizando la cuenta de correo académica y confirma tu cuenta.
* Despues de confirmar tu cuenta, y con la sesion iniciada en IBM Academic Initiative, en la parte de "Most Popular Topics covered", encontraremos **IBM Cloud** y damos click en "Learn more".
* Bajamos de la pagina hasta encontrar "Software". Le damos click, nos dara un apartado que se llama "Request Feature Code".
* Nos dara nuestro codigo. Lo copiamos y lo llevamos a **IBM Cloud**.

## Cargar créditos en IBM Cloud:

* En la parte superior derecha, buscaremos la parte de "MANAGE"/"GESTIONAR", nos desplegara una lista y seleccionaremos "Account"/"Cuenta".
* De lado izquierdo, tendremos una opción "Account settings"/"Configuracion de cuenta".
* Bajamos un poco hasta encontrar "Subscription and feature codes"/"Codigos de suscripción y carateristicas".
* Da click en "Apply code"/"Aplicar codigo".
* Ingresamos el codigo y click en "Apply"/"Aplicar".

[url-academic]: https://my15.digitalexperience.ibm.com/b73a5759-c6a6-4033-ab6b-d9d4f9a6d65b/dxsites/151914d1-03d2-48fe-97d9-d21166848e65/home/
[url-IBMCLOUD]: https://cloud.ibm.com/registration
[url-CLI-IBMCLOUD]: https://cloud.ibm.com/docs/cli/reference/ibmcloud?topic=cloud-cli-install-ibmcloud-cli
[url-github-join]: https://github.com/join
[url-github-cli]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[url-githubdesktop]: https://desktop.github.com/
[url-node]: https://nodejs.org/es/download/


## 1. Crea el Servicio de Watson Studio
Entra a [**IBM Cloud**](https://cloud.ibm.com/) e ir a la sección de catálogo.<br/> <br/>
![](assets/cloud1.png) <br/> <br/>
Buscar el servicio “Watson Studio” (Escríbelo en el buscador o encuéntralo en la sección “AI”) y crear el servicio.<br/><br/>
![](assets/cloud2.png)<br/>
<br/>![](assets/cloud3.png)<br/>
## 2.	Crear el Servicio de Visual Recognition
Dentro de [**IBM Cloud**](https://cloud.ibm.com/) ir a la sección de catálogo.<br/><br/>
![](assets/cloud1.png)<br/>
Buscar el servicio “Visual Recognition” (Escríbelo en el buscador o encuéntralo en la sección “AI”) y crear el servicio.<br/><br/>
![](assets/cloud4.png)<br/><br/>
![](assets/cloud5.png)<br/><br/>
Ir a "Manage” y dar click en “Create a custom model”<br/><br/>
![](assets/cloud6.png)<br/><br/>
Automaticamente se creará el servicio de “Object Storage”.<br/>

## 3.	Crear el modelo un modelo en Visual Recognition
### Dentro del panel de Visual Recognition, realizar los siguientes pasos:
      •	En el apartado de "Classify Images" hacemos clic en “Create Model”
   ![](assets/cloud7.png)<br/>
   
      •	Ingresamos el nombre “Tacos”.
      •	Seleccionamos los servicios anteriormente creados (Watson Studio y Object Storage).
      •	Hacemos clic en el botón “Create”.
   ![](assets/cloud8.png)<br/> 
   
## 4.	Agrega archivos al proyecto y entrena el modelo
        •	Cambiamos el nombre del Modelo por “Tipos de tacos”
   ![](assets/cloud9.png)<br/> 
   
        •	Agregamos los archivos .zip que se encuentran en la carpeta 
        “Tacos imágenes” (del repositorio) en el área de “Upload to Project”
   ![](assets/cloud10.png)<br/> 
   
        •	Seleccionamos todos los archivos importados y hacemos clic en “Add to model” 
   ![](assets/cloud11.png)<br/> 

        •	Una vez cargadas las fotos podremos observaremos que aparece “Ready to train”
        y haremos clic en “Train model”.
   ![](assets/cloud12.png)<br/> 
   
        •	Una vez finalizado el entrenamiento podremos probarlo con el archivo “pastor.jpg”
        que se encuentra en la carpeta "Imagenes Prueba" de este repositorio
   ![](assets/cloud14.png)<br/> 
   ![](assets/cloud16.png)<br/> 
   ![](assets/cloud17.png)<br/> 
   ![](assets/cloud18.png)<br/> 

## 5.	Obtenga las credenciales del servicio 
 Abra una nueva pestaña en su navegador para acceder a [**IBM Cloud**](https://cloud.ibm.com/login).<br/>
         
         En el panel de control, haga clic en el servicices > VisualRecognition
         
 ![](assets/cloud19.png)<br/><br/>
Ir a la pestaña "ServiceCredentials", dirigete a las credenciales "writer" y da clic en ver credenciales.<br/><br/>
![](assets/cloud13.png)<br/><br/>
Copia las credenciales en el editor de texto de tu preferencia para que podamos usarlas más tarde. Las credenciales se verán como estas:<br/><br/>
![](assets/cloud15.png)<br/><br/>
## Nota: NO Utilizar las "Auto Generated Credentials" <br/>

## 6.	Probando la app 
   Descarga este repositorio a tu computadora.<br/><br/>
   Abrimos el archivo “app.js” que se encuentra en este repositorio.<br/><br/>
   Copiamos el “apikey” de las credenciales que copiamos en el paso anterior y la colocamos en la variable “iam_apikey”.<br/>
   ![](assets/cloud20.png)<br/><br/>
   Para obtener el model ID vamos al apartado Tipos de Tacos y copiamos como a continuación se indica.<br/>
   ![](assets/cloud21.png)<br/><br/>
   Lo sustituimos en la variable “classifier_ids” de nuestro documento “app.js”.<br/>
   ![](assets/cloud22.png)<br/><br/>
   Abrir terminal y correr los siguientes comandos dentro de la carpeta donde se encuentra este repositorio:</br>
      
      1.	Ingresar: npm install 
      2.	Ingresar: npm start
      
   Dirigirse al localhost en el puerto “8080 ” introduciendo esta [**liga**](http://localhost:8080/)<br/> <br/>
   Da click en el botón "Archivo" y selecciona la imagen “pastor.jpg” para probar la aplicación.<br/>
   ![](assets/cloud23.png)<br/><br/>
    Damos clic en el botón “Clasificador de taco personalizado“ para utilizar el modelo que acabamos de crear y observar el resultado.<br/>
   ![](assets/cloud24.png)<br/><br/>
    Ahora seleccionamos el archivo “lengua.jpg”y hacemos clic en el botón “Clasificador general” para utilizar el clasificador por defecto de Watson Visual Recognition y observa el resultado.
   ![](assets/cloud25.png)<br/><br/>
   
## 7.	Desplegar app en la nube 
Sube la carpeta en donde tienes la app a un repositorio propio de GitHub. Si no sabes hacerlo puedes seguir las instrucciones [**aqui**](https://gist.github.com/cgonzalezdai/cc33db72a6fe5178637aabb562eae35c)<br/>
Puedes desplegar esta aplicación como una Cloud Foundry application hacia IBM Cloud dando click en el botón de abajo. Esta opción creará una deployment pipeline, con un Git lab project hosteado y una devops toolchain.<br/>    
<p align="center">
    <a href="https://cloud.ibm.com/devops/setup/deploy?repository">
    <img src="https://cloud.ibm.com/devops/setup/deploy/button_x2.png" alt="Deploy to IBM Cloud">
    </a>
</p>

     Damos clic en "Get started <br/>
     
![](assets/cloud26.png)<br/><br/>

    Ingresamos en la opción "Develop a Cloud Foundry app".
    
![](assets/cloud27.png)<br/><br/>

    Ingresamos el link del repositorio de Git en el recuadro marcado.
    
![](assets/cloud28.png)<br/><br/>

    Ahora nos vamos al apartado de "Delivery Pipeline" y creamos una IBM Cloud API Key con el botón "create + ".
    
![](assets/cloud29.png)<br/><br/>

    Damos clic en el botón "Create" de la parte superior y esperamos a que se despliegue nuestra app.
    
![](assets/cloud30.png)<br/><br/>

Podemos consultar el URL de la app esperando a que el despliegue termine ó buscando la app en el dashboard de IBM Cloud, damos clic en el nombre de la app, y damos click en el URL de la Overview page para abrir la app en una nueva pestaña en el navegador.<br/>

![](assets/cloud31.png)<br/><br/>

