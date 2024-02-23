import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);


// Bu kod parçası, Firebase Authentication'ı başlatmayı ve hizmete erişmek için bir referans almayı amaçlamaktadır. İşte bu kodun yaptığı şeyler:

// İlk olarak, firebase/app modülünden initializeApp fonksiyonunu ve firebase/auth modülünden getAuth fonksiyonunu içe aktarıyoruz.

// Ardından, firebaseConfig adında bir nesne oluşturuyoruz. Bu nesne, Firebase proje yapılandırmasıyla ilgili bilgileri içermektedir. Bu bilgiler, Firebase konsolundan alınmalı ve projenizin özel yapılandırmasıyla değiştirilmelidir. process.env.REACT_APP_ öneki, projenizin .env dosyasındaki değişkenlere erişmeyi sağlar.

// initializeApp fonksiyonunu kullanarak Firebase'i başlatıyoruz ve yapılandırma nesnesini firebaseConfig ile iletiyoruz. Bu, Firebase projesiyle uygulamayı başlatır.

// Son olarak, getAuth fonksiyonunu kullanarak Firebase Authentication'ı başlatıyoruz ve auth adında bir referans alıyoruz. Bu referans, Firebase Authentication hizmetine erişmek için kullanılabilir.