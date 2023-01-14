import React from 'react';
import { TAX_PERCENTAGE_GROSS, TAX_PERCENTAGE_NET } from '../../../app.config';
import logoImage from '../../assets/logo.png';
import IncomeTable from '../IncomeTable/IncomeTable';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.calculateTax = this.calculateTax.bind(this);
    this.state = {
      salaries: {
        annualy: {
          gross: 0,
          net: 0,
          tax: 0,
        },
        monthly: {
          gross: 0,
          net: 0,
          tax: 0,
        },
        fortnightly: {
          gross: 0,
          net: 0,
          tax: 0,
        },
        weekly: {
          gross: 0,
          net: 0,
          tax: 0,
        },
      },
      formValues: {
        totalIncome: 0,
        selectedOption: 'annualy',
        incomeType: 'gross',
      },
      showTable: false,
    };
  }

  handleChange = (event) => {
    const { formValues } = this.state;
    formValues[event.target.name] = event.target.value;
    this.setState({ formValues, showTable:false });
  };

  calculateTax = () => {
    const { formValues } = this.state;

    if (formValues.incomeType === 'gross') {
      const tax = formValues.totalIncome * TAX_PERCENTAGE_GROSS;
      const grossSalary = formValues.totalIncome;
      const netSalary = grossSalary - tax;
      if (formValues.selectedOption === 'annualy') {
        this.setState({
          salaries: {
            annualy: {
              gross: grossSalary,
              net: netSalary,
              tax: tax,
            },
            monthly: {
              gross: grossSalary / 12,
              net: netSalary / 12,
              tax: tax / 12,
            },
            fortnightly: {
              gross: grossSalary / 12 / 2,
              net: netSalary / 12 / 2,
              tax: tax / 12 / 2,
            },
            weekly: {
              gross: grossSalary / 12 / 4,
              net: netSalary / 12 / 4,
              tax: tax / 12 / 4,
            },
          },
        });
      } else if (formValues.selectedOption === 'monthly') {
        this.setState({
          salaries: {
            annualy: {
              gross: grossSalary * 12,
              net: netSalary * 12,
              tax: tax * 12,
            },
            monthly: {
              gross: grossSalary,
              net: netSalary,
              tax: tax,
            },
            fortnightly: {
              gross: grossSalary / 2,
              net: netSalary / 2,
              tax: tax / 2,
            },
            weekly: {
              gross: grossSalary / 4,
              net: netSalary / 4,
              tax: tax / 4,
            },
          },
        });
      } else if (formValues.selectedOption === 'weekly') {
        this.setState({
          salaries: {
            annualy: {
              gross: grossSalary * 12 * 4,
              net: netSalary * 12 * 4,
              tax: tax * 12 * 4,
            },
            monthly: {
              gross: grossSalary * 4,
              net: netSalary * 4,
              tax: tax * 4,
            },
            fortnightly: {
              gross: grossSalary * 2,
              net: netSalary * 2,
              tax: tax * 2,
            },
            weekly: {
              gross: grossSalary,
              net: netSalary,
              tax: tax,
            },
          },
        });
      } else if (formValues.selectedOption === 'fortnightly') {
        this.setState({
          salaries: {
            annualy: {
              gross: grossSalary * 12 * 2,
              net: netSalary * 12 * 2,
              tax: tax * 12 * 2,
            },
            monthly: {
              gross: grossSalary * 2,
              net: netSalary * 2,
              tax: tax * 2,
            },
            fortnightly: {
              gross: grossSalary,
              net: netSalary,
              tax: tax,
            },
            weekly: {
              gross: grossSalary / 2,
              net: netSalary / 2,
              tax: tax / 2,
            },
          },
        });
      }
    } else if (formValues.incomeType === 'net') {
      const tax = formValues.totalIncome * TAX_PERCENTAGE_NET;
      const netSalary = formValues.totalIncome;
      const grossSalary = netSalary - tax;
      if (formValues.selectedOption === 'annualy') {
        this.setState({
          salaries: {
            annualy: {
              gross: grossSalary,
              net: netSalary,
              tax: tax,
            },
            monthly: {
              gross: grossSalary / 12,
              net: netSalary / 12,
              tax: tax / 12,
            },
            fortnightly: {
              gross: grossSalary / 12 / 2,
              net: netSalary / 12 / 2,
              tax: tax / 12 / 2,
            },
            weekly: {
              gross: grossSalary / 12 / 4,
              net: netSalary / 12 / 4,
              tax: tax / 12 / 4,
            },
          },
        });
      } else if (formValues.selectedOption === 'monthly') {
        this.setState({
          salaries: {
            annualy: {
              gross: grossSalary * 12,
              net: netSalary * 12,
              tax: tax * 12,
            },
            monthly: {
              gross: grossSalary,
              net: netSalary,
              tax: tax,
            },
            fortnightly: {
              gross: grossSalary / 2,
              net: netSalary / 2,
              tax: tax / 2,
            },
            weekly: {
              gross: grossSalary / 4,
              net: netSalary / 4,
              tax: tax / 4,
            },
          },
        });
      } else if (formValues.selectedOption === 'weekly') {
        this.setState({
          salaries: {
            annualy: {
              gross: grossSalary * 12 * 4,
              net: netSalary * 12 * 4,
              tax: tax * 12 * 4,
            },
            monthly: {
              gross: grossSalary * 4,
              net: netSalary * 4,
              tax: tax * 4,
            },
            fortnightly: {
              gross: grossSalary * 2,
              net: netSalary * 2,
              tax: tax * 2,
            },
            weekly: {
              gross: grossSalary,
              net: netSalary,
              tax: tax,
            },
          },
        });
      } else if (formValues.selectedOption === 'fortnightly') {
        this.setState({
          salaries: {
            annualy: {
              gross: grossSalary * 12 * 2,
              net: netSalary * 12 * 2,
              tax: tax * 12 * 2,
            },
            monthly: {
              gross: grossSalary * 2,
              net: netSalary * 2,
              tax: tax * 2,
            },
            fortnightly: {
              gross: grossSalary,
              net: netSalary,
              tax: tax,
            },
            weekly: {
              gross: grossSalary / 2,
              net: netSalary / 2,
              tax: tax / 2,
            },
          },
        });
      }
    }

    this.setState({ showTable: true });
  };

  render() {
    const { formValues, salaries, showTable } = this.state;
    return (
      <div>
        <div className="h-full flex items-center justify-center mt-12">
          <a
            href="#"
            className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xxl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-80 md:rounded-none md:rounded-l-lg"
              src={logoImage}
              alt="Income Tax Calculator"
            />
            <div className="flex flex-col justify-between p-4 leading-normal w-80">
              <form>
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                    Enter your total income
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="text"
                      name="totalIncome"
                      className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-green-light focus:ring-green-light sm:text-sm"
                      value={formValues.totalIncome}
                      onChange={this.handleChange}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <label htmlFor="currency" className="sr-only">
                        Currency
                      </label>
                      <select
                        name="selectedOption"
                        className="h-full rounded-md border-transparent focus:border-transparent focus:ring-0 cursor-pointer bg-transparent py-0 pl-2 pr-7 text-gray-500 sm:text-sm"
                        value={formValues.selectedOption}
                        onChange={this.handleChange}
                      >
                        <option value="weekly">Weekly</option>
                        <option value="fortnightly">Fortnightly</option>
                        <option value="monthly">Monthly</option>
                        <option value="annualy">Annualy</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700">Please choose the income type</label>
                </div>
                <div className="flex flex-wrap mt-2">
                  <div className="flex items-center mr-4">
                    <input
                      type="radio"
                      id="gross"
                      name="incomeType"
                      value="gross"
                      checked={formValues.incomeType === 'gross'}
                      onChange={this.handleChange}
                      className="w-4 h-4 text-green-light bg-gray-100 border-gray-300 focus:ring-green-light dark:focus:ring-green-light dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="green-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Gross
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      type="radio"
                      id="net"
                      name="incomeType"
                      value="net"
                      checked={formValues.incomeType === 'net'}
                      onChange={this.handleChange}
                      className="w-4 h-4 text-green-light bg-gray-100 border-gray-300 focus:ring-green-light dark:focus:ring-green-light dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="green-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Net
                    </label>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={this.calculateTax}
                  className="focus:outline-none w-40 h-8 mt-4 text-white bg-green-light hover:bg-green-light focus:ring-4 focus:ring-green-light font-medium rounded-lg text-sm px-5 py- mb-2 bg-green-light dark:hover:bg-green-light dark:focus:ring-green-light"
                >
                  Calculate
                </button>
              </form>
            </div>
          </a>
        </div>
        {showTable && <IncomeTable salaries={salaries} formValues={formValues} />}
      </div>
    );
  }
}

export default Calculator;
