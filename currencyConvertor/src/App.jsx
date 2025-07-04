import { useState } from 'react'
import  InputBox  from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {

  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0)

  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('INR')

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo)

  const convert = ()=> setConvertedAmount(amount * currencyInfo[to])
  
  const swap = ()=> {
    setAmount(convertedAmount)
    setConvertedAmount(amount)
    setFrom(to)
    setTo(from)
  }
  
   
  return (
        <div
        className="w-full min-h-screen flex flex-wrap bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
        >
            <div className="w-full flex flex-wrap items-center justify-around p-6 mx-20">
            {/* Left Side: Image */}
                <div className='w-full md:w-110  '>
                    <img className="w-full h-auto rounded-lg shadow-md" src="https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg" alt="chai" />
                </div>
                {/* Right Side: Form */}
                <div className="w-full md:w-1/3 mt-10 md:mx-0 border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>{
                                  setFrom(currency.toUpperCase())
                                }}
                                onAmountChange={(amount)=>
                                  setAmount(amount)
                                }
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>
                                  setTo(currency.toUpperCase())
                                }
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App


// hooks simple method hain returnign array, parameters kcvh optional lety hain kch m must 
// m custom hooks bnarhi hun to us m currency dena must hai
// api fetch hogi call pe to useEffect use kia 
// string m data ayega api sy to cconvert that to json 