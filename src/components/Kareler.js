/*
Kareler Talimaları

Aşağıdaki kısa videoyu izleyin:
https://www.ergineer.com/assets/materials/a664dfe7-kareler.gif

Bu bileşen, bir yandan "kare idlerinin" listesinin kaydını tutar,
ve şu anda aktif olan id yi tutar. Yani iki dilim kullanılacak!
Biri kareleri oluşturmak için kullanılır, diğeri ise id yi tutmak için,
böylece bileşen hangi karenin o anda aktif olduğunu bilir.

Herhangi bir noktada yalnızca bir kare aktif olabilir (ya da hiçbiri)

Aşaıdaki yorumları takip edin.
*/

import React, { useState } from 'react';


//Bu değişkeni YALNIZCA bir durum dilimini yüklemek için kullanın!
const KareIdListesi = ['sqA', 'sqB', 'sqC', 'sqD'];



export default function Kareler() {
 
  const [aktifKare, setAktifKare] = useState(null);

  // State hookunu 2 defa kullanın: 'kareler' ve
  // 'aktifKare' olmak üzere. Birisi kare idlerini _dizi_ olarak tutacak, diğeri ise aktif olan
  // kareyi gözlemleyecek. Sayfa yüklendiğinde aktif kare olmayacak,
  // yani  'aktifKare' null olmalı.
	
  const ClassAdiAl = id => {
    // Bu bir click handler değildir, JSX içinde kullanılan bir yardımcıdır(helper).(aşağıya bakın)
    // Eğer argüman olarak verilen id aktif kare state'indeki id ile eşleşirse, class adı 'active' olan bir string döndürecek
    // diğer durumlar için boş döndürecek.
    // Etkisini görmek için kareye sağ tıklayın ve "öğeyi inceleyin".
	return aktifKare === id ? "active" : null;
  };

  const AktifEt = id => {
    // Bu bir _satır içinden çağırılmış_ click handler yardımcısıdır.
    // id bağımsız değişkenini, stateteki aktif id olacak şekilde ayarlayın
    // eğer zaten aktifse, o zaman önce state i resetlemeliyiz.
    
    aktifKare === id ? setAktifKare(null) : setAktifKare(id);


  };

  return (
    <div className='widget-squares container'>
      <h2>Kareler</h2>
      <div className='squares'>
        {
          // Kötü bug!  'KareIdListesi' yerine bir state dilimi kullanmalıyız.
          // Şöyle diyebiliriz: "aa bu çalışıyor!" Ama kareler bir state diliminden gelmiyorsa,
          // asla yeni kare ekleyemeyiz, kareleri düzenleyemeyiz ya da silemeyiz. Düzeltin!
          KareIdListesi.map(id =>
            <div
              id={id}
              key={id}
              className={`square ${ClassAdiAl(id)}`}
              onClick={() => AktifEt(id)}
            >
            </div>
          )
        }
      </div>
    </div>
  );
}
