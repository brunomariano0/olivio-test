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
        <div className="flex flex-col items-center">
          {/* Pai e Mãe */}
          <div className="flex justify-center w-full mb-8">
            <div className="flex-1 flex flex-col items-center">
              <div className="bg-gray-100 px-4 py-2 rounded-t text-center font-semibold border w-64">Pai</div>
              <div className="border rounded-b px-6 py-4 bg-white text-center font-medium w-64 text-olive-700">
                {pai}
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="bg-gray-100 px-4 py-2 rounded-t text-center font-semibold border w-64">Mãe</div>
              <div className="border rounded-b px-6 py-4 bg-white text-center font-medium w-64 text-olive-700">
                {mae}
              </div>
            </div>
          </div>

          {/* Avós */}
          <div className="flex justify-center w-full mb-8 relative">
            {/* Linhas de conexão vertical */}
            <div className="absolute left-1/4 top-0 h-8 w-0.5 bg-gray-300 z-0" style={{left: '25%'}}></div>
            <div className="absolute left-3/4 top-0 h-8 w-0.5 bg-gray-300 z-0" style={{left: '75%'}}></div>
            {/* Linhas horizontais */}
            <div className="absolute left-1/4 top-8 w-1/2 h-0.5 bg-gray-300 z-0" style={{left: '25%', width: '50%'}}></div>
            <div className="flex-1 flex flex-col items-center z-10">
              <div className="bg-gray-100 px-4 py-2 rounded-t text-center font-semibold border w-64">Avós Paternos</div>
              <div className="border rounded-b px-6 py-4 bg-white text-center font-medium w-64 text-olive-700 mb-8">
                {avosPaternos[0]}
              </div>
              <div className="border rounded-b px-6 py-4 bg-white text-center font-medium w-64 text-olive-700">
                {avosPaternos[1]}
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center z-10">
              <div className="bg-gray-100 px-4 py-2 rounded-t text-center font-semibold border w-64">Avós Maternos</div>
              <div className="border rounded-b px-6 py-4 bg-white text-center font-medium w-64 text-olive-700 mb-8">
                {avosMaternos[0]}
              </div>
              <div className="border rounded-b px-6 py-4 bg-white text-center font-medium w-64 text-olive-700">
                {avosMaternos[1]}
              </div>
            </div>
          </div>

          {/* Bisavós */}
          <div className="flex justify-center w-full mb-8 relative">
            {/* Linhas de conexão vertical */}
            <div className="absolute left-[12.5%] top-0 h-8 w-0.5 bg-gray-300 z-0" style={{left: '12.5%'}}></div>
            <div className="absolute left-[37.5%] top-0 h-8 w-0.5 bg-gray-300 z-0" style={{left: '37.5%'}}></div>
            <div className="absolute left-[62.5%] top-0 h-8 w-0.5 bg-gray-300 z-0" style={{left: '62.5%'}}></div>
            <div className="absolute left-[87.5%] top-0 h-8 w-0.5 bg-gray-300 z-0" style={{left: '87.5%'}}></div>
            {/* Linhas horizontais */}
            <div className="absolute left-[12.5%] top-8 w-[75%] h-0.5 bg-gray-300 z-0" style={{left: '12.5%', width: '75%'}}></div>
            <div className="flex-1 flex flex-col items-center z-10">
              <div className="bg-gray-100 px-4 py-2 rounded-t text-center font-semibold border w-64">Bisavós Paternos</div>
              <div className="border rounded-b px-6 py-4 bg-white text-center font-medium w-64 text-olive-700 mb-8">
                {bisavosPaternos[0]}
              </div>
              <div className="border rounded-b px-6 py-4 bg-white text-center font-medium w-64 text-olive-700 mb-8">
                {bisavosPaternos[1]}
              </div>
              <div className="border rounded-b px-6 py-4 bg-white text-center font-medium w-64 text-olive-700 mb-8">
                {bisavosPaternos[2]}
              </div>
              <div className="border rounded-b px-6 py-4 bg-white text-center font-medium w-64 text-olive-700">
                {bisavosPaternos[3]}
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center z-10">
              <div className="bg-gray-100 px-4 py-2 rounded-t text-center font-semibold border w-64">Bisavós Maternos</div>
              <div className="border rounded-b px-6 py-4 bg-white text-center font-medium w-64 text-olive-700 mb-8">
                {bisavosMaternos[0]}
              </div>
              <div className="border rounded-b px-6 py-4 bg-white text-center font-medium w-64 text-olive-700 mb-8">
                {bisavosMaternos[1]}
              </div>
              <div className="border rounded-b px-6 py-4 bg-white text-center font-medium w-64 text-olive-700 mb-8">
                {bisavosMaternos[2]}
              </div>
              <div className="border rounded-b px-6 py-4 bg-white text-center font-medium w-64 text-olive-700">
                {bisavosMaternos[3]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PedigreeTree;