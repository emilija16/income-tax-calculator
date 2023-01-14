import React from 'react';

class IncomeTable extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      selectedOption: '',
      income: 0,
      selected: false,
    };
  }

  handleChange = (event) => {
    const { formValues } = this.props;

    this.setState({ selected: true });

    let frequency = event.target.value;

    this.setState({ selectedOption: frequency });

    if (formValues.incomeType === 'gross') {
      if (frequency === 'annualy') {
        this.setState({ income: this.props.salaries.annualy.gross });
      } else if (frequency === 'monthly') {
        this.setState({ income: this.props.salaries.monthly.gross });
      } else if (frequency === 'fortnightly') {
        this.setState({ income: this.props.salaries.fortnightly.gross });
      } else if (frequency === 'weekly') {
        this.setState({ income: this.props.salaries.weekly.gross });
      }
    } else if (formValues.incomeType === 'net') {
      if (frequency === 'annualy') {
        this.setState({ income: this.props.salaries.annualy.net });
      } else if (frequency === 'monthly') {
        this.setState({ income: this.props.salaries.monthly.net });
      } else if (frequency === 'fortnightly') {
        this.setState({ income: this.props.salaries.fortnightly.net });
      } else if (frequency === 'weekly') {
        this.setState({ income: this.props.salaries.weekly.net });
      }
    }
  };

  render() {
    const salaries = this.props.salaries;
    const { income } = this.state;

    return (
      <div className="flex items-center justify-center mt-8">
        <div className="max-w-xl p-8 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="relative w-full">
            <div>
              <h5 className="inline text-xl font-medium text-white dark:text-white bg-green-darker px-12 py-2 rounded">
                $ {!this.state.selected ? this.props.formValues.totalIncome : Math.round(income)}
              </h5>
              <p className="inline text-lg ml-4">
                Your {this.props.formValues.incomeType}
                <select
                  id="small"
                  name="selectedOption"
                  className="w-28 ml-2 p-2 mb-6 text-sm text-gray-900 border-transparent focus:border-transparent focus:ring-0 rounded-lg bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-whitehover:border-current cursor-pointer select-none"
                  value={
                    this.state.selectedOption === '' ? this.props.formValues.selectedOption : this.state.selectedOption
                  }
                  onChange={this.handleChange}
                >
                  <option value="weekly">weekly</option>
                  <option value="fortnightly">fortnightly</option>
                  <option value="monthly">monthly</option>
                  <option value="annualy">annualy</option>
                </select>
                income
              </p>
            </div>

            <table className="text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="bg-green-light text-white">
                  <th scope="col" className="px-6 py-3">
                    Frequency
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gross Income
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tax
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Net Income
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Weekly
                  </th>
                  <td className="px-6 py-4">{Math.round(salaries.weekly.gross)}</td>
                  <td className="px-6 py-4">{Math.round(salaries.weekly.tax)}</td>
                  <td className="px-6 py-4">{Math.round(salaries.weekly.net)}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Fortnightly
                  </th>
                  <td className="px-6 py-4">{Math.round(salaries.fortnightly.gross)}</td>
                  <td className="px-6 py-4">{Math.round(salaries.fortnightly.tax)}</td>
                  <td className="px-6 py-4">{Math.round(salaries.fortnightly.net)}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Monthly
                  </th>
                  <td className="px-6 py-4">{Math.round(salaries.monthly.gross)}</td>
                  <td className="px-6 py-4">{Math.round(salaries.monthly.tax)}</td>
                  <td className="px-6 py-4">{Math.round(salaries.monthly.net)}</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Annualy
                  </th>
                  <td className="px-6 py-4">{Math.round(salaries.annualy.gross)}</td>
                  <td className="px-6 py-4">{Math.round(salaries.annualy.tax)}</td>
                  <td className="px-6 py-4">{Math.round(salaries.annualy.net)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default IncomeTable;
