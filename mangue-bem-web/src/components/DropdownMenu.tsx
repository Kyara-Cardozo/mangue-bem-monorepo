import React, { useState } from "react";

const DropdownMenu = ({ width = "w-40", selectedOptions, setSelectedOptions, isOpen, setIsOpen }: { width: string, selectedOptions: any, setSelectedOptions: any, isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => {
  //const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const ufOptions = [
    { code: '', name: 'Qualquer estado' },
    { code: 'AC', name: 'Acre' },
    { code: 'AL', name: 'Alagoas' },
    { code: 'AP', name: 'Amapá' },
    { code: 'AM', name: 'Amazonas' },
    { code: 'BA', name: 'Bahia' },
    { code: 'CE', name: 'Ceará' },
    { code: 'DF', name: 'Distrito Federal' },
    { code: 'ES', name: 'Espírito Santo' },
    { code: 'GO', name: 'Goiás' },
    { code: 'MA', name: 'Maranhão' },
    { code: 'MT', name: 'Mato Grosso' },
    { code: 'MS', name: 'Mato Grosso do Sul' },
    { code: 'MG', name: 'Minas Gerais' },
    { code: 'PA', name: 'Pará' },
    { code: 'PB', name: 'Paraíba' },
    { code: 'PR', name: 'Paraná' },
    { code: 'PE', name: 'Pernambuco' },
    { code: 'PI', name: 'Piauí' },
    { code: 'RJ', name: 'Rio de Janeiro' },
    { code: 'RN', name: 'Rio Grande do Norte' },
    { code: 'RS', name: 'Rio Grande do Sul' },
    { code: 'RO', name: 'Rondônia' },
    { code: 'RR', name: 'Roraima' },
    { code: 'SC', name: 'Santa Catarina' },
    { code: 'SP', name: 'São Paulo' },
    { code: 'SE', name: 'Sergipe' },
    { code: 'TO', name: 'Tocantins' }
  ];  
  
  const biomaOptions = [
    { code: '', name: 'Qualquer bioma' },
    { code: 'Atlantic Rainforest', name: 'Atlantic Rainforest' },
    { code: 'Amazon Rainforest', name: 'Amazon Rainforest' },
    { code: 'Pinus Plantation', name: 'Pinus Plantation' },
    { code: 'Eucalyptus Plantation', name: 'Eucalyptus Plantation' },
    { code: 'Exotic Trees', name: 'Exotic Trees' },
    { code: 'Pecan Plantation', name: 'Pecan Plantation' },
    { code: 'Pampa', name: 'Pampa' },
    { code: 'Corn Plantation', name: 'Corn Plantation' },
    { code: 'Pampa, Sand Dunes', name: 'Pampa, Sand Dunes' },
    { code: 'Cerrado', name: 'Cerrado' },
    { code: 'On Cattle Dung', name: 'On Cattle Dung' },
    { code: 'Cerrado, Caatinga', name: 'Cerrado, Caatinga' },
    { code: 'Caatinga', name: 'Caatinga' },
    { code: 'Cerrado, Pampa', name: 'Cerrado, Pampa' }
  ];
  
  const classificacaoOptions = [
    { code: '', name: 'Qualquer classificação' },
    { code: 'bem1', name: 'bem1' },
    { code: 'bem2', name: 'bem2' },
    { code: 'bem3', name: 'bem3' },
    { code: 'bem4', name: 'bem4' },
    { code: 'bem5', name: 'bem5' },
    { code: 'bem6', name: 'bem6' },
    { code: 'bem7', name: 'bem7' },
    { code: 'bem8', name: 'bem8' },
    { code: 'bem9', name: 'bem9' },
    { code: 'bem10', name: 'bem10' },
    { code: 'p1', name: 'p1' },
    { code: 'p2', name: 'p2' }
  ];

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, category: string) => {
    const value = e.target.value;
    setSelectedOptions((prevState: any) => ({
      ...prevState,
      [category]: value
    }));
  };

  const appliedFiltersCount = Object.values(selectedOptions).filter(value => value).length;

  return (
    <div className="relative">
      <button
        className={`my-3 ${width} flex flex-row gap-1 rounded-md bg-emerald-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition duration-300 ease-in  hover:bg-pink-700 hover:shadow-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        onClick={toggleDropdown}
      >
        <span>Filtros</span>
        {appliedFiltersCount > 0 ? <span>({appliedFiltersCount})</span> : ''}
      </button>
      {isOpen && (
        <div
          className={`absolute z-10 ${width} -left-1/2 mt-2 -translate-x-1/2 transform rounded-md border border-gray-300 bg-white shadow-lg transition duration-300 ease-out`}
        >
          <div className="flex w-fit">
            <div className="flex flex-col">
              <div className="col-span-1 bg-emerald-300 px-4 py-2 text-gray-700">
                Estado
              </div>
              <select defaultValue="" onChange={(e) => handleSelectChange(e, "uf")}>
                {ufOptions.map(uf => (
                  <option key={uf.code} value={uf.code}>{uf.name}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <div className="col-span-1 bg-emerald-300 px-4 py-2 text-gray-700">
                Bioma
              </div>
              <select defaultValue="" onChange={(e) => handleSelectChange(e, "bioma")}>
                {biomaOptions.map(bioma => (
                  <option key={bioma.code} value={bioma.code}>{bioma.name}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <div className="col-span-1 bg-emerald-300 px-4 py-2 text-gray-700">
                Classificação
              </div>
              <select defaultValue="" onChange={(e) => handleSelectChange(e, "classificacao")}>
                {classificacaoOptions.map(classificacao => (
                  <option key={classificacao.code} value={classificacao.code}>{classificacao.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;