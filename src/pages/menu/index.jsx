import Image from 'next/image';

import MainLayout from '@/layouts/MainLayout';
import axios from 'axios';
import { useEffect, useState } from 'react';

import NumberFormat from '@/utils/NumberFormat';

export default function MenuPages() {
  const [Data, setData] = useState([]);

  function getData() {
    axios.get('/api/coffee').then((ress) => {
      console.log(ress?.data?.data);
      setData(ress?.data?.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <MainLayout>
        <p className='text-4xl font-bold'>Halaman Menu</p>
        <div className='grid grid-cols-3 gap-4'>
          {Data?.map((data, indexData) => (
            <div key={indexData} className='flex gap-4 p-4 border-2 rounded-md'>
              <div className='min-w-[164px]'>
                <Image alt='image' width={164} height={164} src={'/logo.png'} />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-2xl font-bold'>{data?.name}</p>
                <p className='text-xl font-bold text-cci-blue'>
                  Rp{NumberFormat(data?.price)}
                </p>
                <p>{data?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </MainLayout>
    </>
  );
}
