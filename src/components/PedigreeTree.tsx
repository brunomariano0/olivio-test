import React from 'react';

interface PedigreeTreeProps {
  pai: string;
  mae: string;
  avosPaternos: string[];
  avosMaternos: string[];
  bisavosPaternos: string[];
  bisavosMaternos: string[];
}

const PedigreeTree: React.FC<PedigreeTreeProps> = ({
  pai,
  mae,
  avosPaternos,
  avosMaternos,
  bisavosPaternos,
  bisavosMaternos
}) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[1200px] p-4">
        <h2 className="text-2xl font-bold text-center mb-8">Pedigree</h2>
        <div className="grid grid-cols-4 gap-x-8 gap-y-4 justify-items-center items-center relative">
          {/* Cabeçalhos */}
          <div className="col-span-1 w-64 text-center bg-gray-100 rounded-t border font-semibold py-2">Pai</div>
          <div className="col-span-1 w-64 text-center bg-gray-100 rounded-t border font-semibold py-2">Avós Paternos</div>
          <div className="col-span-1 w-64 text-center bg-gray-100 rounded-t border font-semibold py-2">Bisavós Paternos</div>
          <div className="col-span-1 w-64 text-center bg-gray-100 rounded-t border font-semibold py-2">Bisavós Paternos</div>

          {/* Linha 1 - Pai e ascendência paterna */}
          <div className="row-span-2 w-64 border rounded-b bg-white text-center font-medium flex items-center justify-center min-h-[80px]">
            {pai}
          </div>
          <div className="w-64 border rounded-b bg-white text-center font-medium flex items-center justify-center min-h-[80px]">
            {avosPaternos[0]}
          </div>
          <div className="w-64 border rounded-b bg-white text-center font-medium flex items-center justify-center min-h-[80px]">
            {bisavosPaternos[0]}
          </div>
          <div className="w-64 border rounded-b bg-white text-center font-medium flex items-center justify-center min-h-[80px]">
            {bisavosPaternos[1]}
          </div>

          {/* Linha 2 - Pai e ascendência paterna */}
          <div className="hidden"></div>
          <div className="w-64 border rounded-b bg-white text-center font-medium flex items-center justify-center min-h-[80px]">
            {avosPaternos[1]}
          </div>
          <div className="w-64 border rounded-b bg-white text-center font-medium flex items-center justify-center min-h-[80px]">
            {bisavosPaternos[2]}
          </div>
          <div className="w-64 border rounded-b bg-white text-center font-medium flex items-center justify-center min-h-[80px]">
            {bisavosPaternos[3]}
          </div>

          {/* Espaço entre pai/mãe */}
          <div className="col-span-4 h-8"></div>

          {/* Cabeçalhos */}
          <div className="col-span-1 w-64 text-center bg-gray-100 rounded-t border font-semibold py-2">Mãe</div>
          <div className="col-span-1 w-64 text-center bg-gray-100 rounded-t border font-semibold py-2">Avós Maternos</div>
          <div className="col-span-1 w-64 text-center bg-gray-100 rounded-t border font-semibold py-2">Bisavós Maternos</div>
          <div className="col-span-1 w-64 text-center bg-gray-100 rounded-t border font-semibold py-2">Bisavós Maternos</div>

          {/* Linha 3 - Mãe e ascendência materna */}
          <div className="row-span-2 w-64 border rounded-b bg-white text-center font-medium flex items-center justify-center min-h-[80px]">
            {mae}
          </div>
          <div className="w-64 border rounded-b bg-white text-center font-medium flex items-center justify-center min-h-[80px]">
            {avosMaternos[0]}
          </div>
          <div className="w-64 border rounded-b bg-white text-center font-medium flex items-center justify-center min-h-[80px]">
            {bisavosMaternos[0]}
          </div>
          <div className="w-64 border rounded-b bg-white text-center font-medium flex items-center justify-center min-h-[80px]">
            {bisavosMaternos[1]}
          </div>

          {/* Linha 4 - Mãe e ascendência materna */}
          <div className="hidden"></div>
          <div className="w-64 border rounded-b bg-white text-center font-medium flex items-center justify-center min-h-[80px]">
            {avosMaternos[1]}
          </div>
          <div className="w-64 border rounded-b bg-white text-center font-medium flex items-center justify-center min-h-[80px]">
            {bisavosMaternos[2]}
          </div>
          <div className="w-64 border rounded-b bg-white text-center font-medium flex items-center justify-center min-h-[80px]">
            {bisavosMaternos[3]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PedigreeTree;