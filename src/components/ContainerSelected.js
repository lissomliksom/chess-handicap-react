import ActionButton from "./ActionButton";

const ContainerSelected = ({ options, setOptions, selected, setSelected }) => {
  return (
    <section>
      <div className="flex items-baseline justify-between">
        <h2 className="mb-3 text-lg font-medium">Active handicaps</h2>
      </div>

      <table className="w-full text-left">
        <thead className="text-xs uppercase bg-gray-100 rounded">
          <tr>
            <th className="w-5/6 p-3">Option</th>
            <th className="w-1/6 p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {selected.map((option, idx) => (
            <tr key={idx} className="text-sm border-b hover:bg-gray-50">
              <td className="p-3">{option.option}</td>
              <td className="p-3">
                <div className="flex items-center justify-center space-x-6">
                  <ActionButton action="removeSelected" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ContainerSelected;