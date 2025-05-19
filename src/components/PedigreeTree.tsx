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
        
        <div className="grid grid-cols-3 gap-4">
          {/* Pai Column */}
          <div className="border-b-2 border-gray-300 pb-4">
            <div className="bg-gray-200 p-2 text-center font-medium rounded">
              Pai
            </div>
          </div>
          
          {/* Avós Paternos Column */}
          <div className="border-b-2 border-gray-300 pb-4">
            <div className="bg-gray-200 p-2 text-center font-medium rounded">
              Avós Paternos
            </div>
          </div>
          
          {/* Bisavós Paternos Column */}
          <div className="border-b-2 border-gray-300 pb-4">
            <div className="bg-gray-200 p-2 text-center font-medium rounded">
              Bisavós Paternos
            </div>
          </div>

          {/* Pai Tree */}
          <div className="relative">
            <div className="border rounded p-3 bg-white">
              {pai}
            </div>
            <div className="absolute top-1/2 right-0 w-8 h-[2px] bg-gray-300"></div>
          </div>
          
          {/* Avós Paternos Tree */}
          <div className="relative">
            <div className="space-y-8">
              {avosPaternos.map((avo, index) => (
                <div key={index} className="relative">
                  <div className="border rounded p-3 bg-white">
                    {avo}
                  </div>
                  <div className="absolute top-1/2 right-0 w-8 h-[2px] bg-gray-300"></div>
                </div>
              ))}
            </div>
            <div className="absolute left-0 top-1/4 bottom-3/4 w-[2px] bg-gray-300"></div>
            <div className="absolute left-0 h-1/2 w-8 border-l-2 border-t-2 border-gray-300"></div>
          </div>
          
          {/* Bisavós Paternos Tree */}
          <div>
            <div className="space-y-4">
              {bisavosPaternos.map((bisavo, index) => (
                <div key={index} className="border rounded p-3 bg-white">
                  {bisavo}
                </div>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="h-8"></div>
          <div className="h-8"></div>
          <div className="h-8"></div>

          {/* Mãe Column */}
          <div className="border-b-2 border-gray-300 pb-4">
            <div className="bg-gray-200 p-2 text-center font-medium rounded">
              Mãe
            </div>
          </div>
          
          {/* Avós Maternos Column */}
          <div className="border-b-2 border-gray-300 pb-4">
            <div className="bg-gray-200 p-2 text-center font-medium rounded">
              Avós Maternos
            </div>
          </div>
          
          {/* Bisavós Maternos Column */}
          <div className="border-b-2 border-gray-300 pb-4">
            <div className="bg-gray-200 p-2 text-center font-medium rounded">
              Bisavós Maternos
            </div>
          </div>

          {/* Mãe Tree */}
          <div className="relative">
            <div className="border rounded p-3 bg-white">
              {mae}
            </div>
            <div className="absolute top-1/2 right-0 w-8 h-[2px] bg-gray-300"></div>
          </div>
          
          {/* Avós Maternos Tree */}
          <div className="relative">
            <div className="space-y-8">
              {avosMaternos.map((avo, index) => (
                <div key={index} className="relative">
                  <div className="border rounded p-3 bg-white">
                    {avo}
                  </div>
                  <div className="absolute top-1/2 right-0 w-8 h-[2px] bg-gray-300"></div>
                </div>
              ))}
            </div>
            <div className="absolute left-0 top-1/4 bottom-3/4 w-[2px] bg-gray-300"></div>
            <div className="absolute left-0 h-1/2 w-8 border-l-2 border-t-2 border-gray-300"></div>
          </div>
          
          {/* Bisavós Maternos Tree */}
          <div>
            <div className="space-y-4">
              {bisavosMaternos.map((bisavo, index) => (
                <div key={index} className="border rounded p-3 bg-white">
                  {bisavo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PedigreeTree;