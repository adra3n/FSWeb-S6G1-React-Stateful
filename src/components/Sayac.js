/*
SAYAÇ Talimatları

Aşağıdaki kısa videoyu izleyin, UI ve Chrome Devtools'a dikkat edin:
https://www.ergineer.com/assets/materials/a664dfe7-sayac.gif

Bu Sayacı oluşturmak için kaç adet state dilimine ihtiyacınız var? Başlamadan önce biraz üzerine düşünün!

Saf bir geliştirici 3 farklı state dilimi diyebilir:
  - Sayıcı
  - Metnin kırmızı mı yoksa mavi mi olduğu
  - Metnin "çift" mi yoksa "tek" mi olduğu

Ancak burada sadece bir state gereklidir: sayici!
Diğer şeyler basitçe sayımın kendisinden türetilebilir.

ADIM 0:
  Aşağıdaki bileşeni inceleyerek ve state hookunu import ederek başlayın.

ADIM 1:
  State hookunu kullanara, bir 'sayici', 'setSayici' çifti oluşturun.
  'sayici' state'inin ilk değeri 0 olarak yüklenmelidir.

ADIM 2:
  'stil' nesnesinde 'color' niteliği sabit olarak "royalblue" olarak belirlenmiştir.
  Bunun yerine 'color' değerinin ne olması gerektiği, şu şekilde belirlenmelidir:
  Eğer sayici çiftse "royalblue", değilse "crimson" olmalıdır.

ADIM 3:
  JSX'teki bazı sabit kodlanmış bilgileri, kıvrımlı parantezler ({}) içinde enterpolasyonlu ifadelerle değiştirmemiz gerekiyor.
  Sabit olarak yazılmış "0" sayısını {sayici} değişkeni ile değiştirerek başlayın.
  Sonra "çift" kelimesini şu kurala göre değiştirin: {eğer sayıcı çiftse, kelime `çift` değilse `tek` olacak}.

ADIM 4:
  Bu click handler'ın, "sayici" stateini artı bir yapacak şekilde programlamak için "setSayici"i kullanması gerekiyor.
  Bu state değişiklikleri senkronize değil: güncellenen sayım, Sayac bileşeninin bir sonraki çalıştırmasında da gelir.
  Sakın basitçe sayici++ yapmayın. Artı artı yasak! Bu tarz artırım bir sonraki çağırımda gelmez. Her zaman state'e yeni değer 
  atamak için state güncelleyici kullanmalısınız.

ADIM 5:
  Bu click handler 'sayici' yi bir azaltmak için 'setSayici' ı kulanacak.
  sayici-- SAKIN kullanmayın. Bu tarz kullanım bir sonraki çalıştırmada gelmez.

ADIM 6:
	Bu click handler 'sayici' yı sıfırlamak için 'setSayici' yi kullanacak.
*/

import React from 'react'; /* ADIM 0 buraya*/
import { useState } from 'react';

export default function Sayac() {
  /* ADIM 1 buraya*/
	const [sayici, setSayici] = useState(0);
	
  const artirici = () => {
    /* ADIM 4 buraya */
    setSayici(sayici + 1);
  };
  const azaltici = () => {
    /* ADIM 5 */
    setSayici(sayici - 1);
  };
  const reset = () => {
    setSayici(0);
  };

  const stil = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: sayici%2== 0 ? 'royalblue': "crimson", /* ADIM 2 */
  };

  return (
    <div className='widget-counter container'>
      <h2>Sayaç</h2>
      <div id='sayici' style={stil}>
        Sayı {sayici} { sayici % 2 == 0 ? "çift" : "tek"}
      </div>
      <div>
        <button id='artirici' onClick={artirici}>Artırıcı</button>
        <button id='decrement' onClick={azaltici}>Azaltıcı</button>
        <button id='resetCount' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
