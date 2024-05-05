
import { useState } from 'react';

import { ResultGrid, SearchBar } from './components';
import { Item } from './types';
import styles from './style';
import { fetchData } from './server';

function App() {

  const [results, setResults] = useState([] as Item[]);

  const onSearchQuery =  async (query: string) => {
    const response = await fetchData(query);
    const formatted = JSON.parse(response.results)

    setResults(formatted);
  }

  return (
    <>
      <div className='bg-midnight-gradient w-screen max-h-fit'>
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-slate-900 py-2 mb-4`}>
          <div className={`${styles.boxWidth}`}>
            <div className="text-white font-poppins font-bold text-center align-middle">- CA6005 - Assignment 2 - Image Search Engine - 23102562 - Daniel Verdejo -</div>
          </div>
        </div>
        <div className='container mx-auto'>
          <div className='rounded-md bg-gradient-to-b from-slate-900 scroll-smooth h-full min-h-screen'>
            <div className={`${styles.flexStart} ${styles.paddingX}`}>
              <div className={`${styles.boxWidth}`}>
                  <SearchBar onSearch={onSearchQuery} />
              </div>
            </div>
            <div className={`${styles.flexStart} ${styles.paddingX}`}>
              <div className={`${styles.boxWidth}`}>
                <ResultGrid results={results}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
