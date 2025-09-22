import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search, X } from 'lucide-react';

interface Litter {
  id: string;
  idpai: string;
  idmae: string;
  infadd: string;
  descricao: string | null;
  [key: string]: any;
}

interface Dog {
  id: string;
  nome: string;
}

const AdminLittersPage: React.FC = () => {
  const [litters, setLitters] = useState<Litter[]>([]);
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingLitter, setEditingLitter] = useState<Litter | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Form state
  const [formData, setFormData] = useState<Partial<Litter>>({
    idpai: '',
    idmae: '',
    infadd: '',
    descricao: '',
  });

  useEffect(() => {
    fetchLitters();
    fetchDogs();
  }, []);

  const fetchLitters = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/api/litters');
      if (!response.ok) throw new Error('Erro ao carregar ninhadas');
      
      const data = await response.json();
      setLitters(data);
    } catch (err) {
      console.error(err);
      setError('Falha ao carregar dados. Verifique se o servidor está rodando.');
    } finally {
      setLoading(false);
    }
  };

  const fetchDogs = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/dogs');
      if (!response.ok) throw new Error('Erro ao carregar cachorros');
      
      const data = await response.json();
      setDogs(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      idpai: '',
      idmae: '',
      infadd: '',
      descricao: '',
    });
    setEditingLitter(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = editingLitter 
        ? `http://localhost:3000/api/litters/${editingLitter.id}` 
        : 'http://localhost:3000/api/litters';
      
      const method = editingLitter ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) throw new Error('Erro ao salvar ninhada');
      
      await fetchLitters();
      setShowForm(false);
      resetForm();
    } catch (err) {
      console.error(err);
      setError('Erro ao salvar dados. Tente novamente.');
    }
  };

  const handleEdit = (litter: Litter) => {
    setEditingLitter(litter);
    setFormData({ ...litter });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Tem certeza que deseja excluir esta ninhada?')) return;
    
    try {
      const response = await fetch(`http://localhost:3000/api/litters/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) throw new Error('Erro ao excluir ninhada');
      
      await fetchLitters();
    } catch (err) {
      console.error(err);
      setError('Erro ao excluir ninhada. Tente novamente.');
    }
  };

  // Função para buscar nome do cão pelo id
  const getDogNameById = (id: string) => {
    const dog = dogs.find(d => d.id === id);
    return dog ? dog.nome : 'Desconhecido';
  };

  const filteredLitters = litters.filter(litter => {
    const fatherName = getDogNameById(litter.idpai).toLowerCase();
    const motherName = getDogNameById(litter.idmae).toLowerCase();
    const searchLower = searchTerm.toLowerCase();
    
    return fatherName.includes(searchLower) || 
           motherName.includes(searchLower) || 
           litter.id.includes(searchLower);
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gerenciar Ninhadas</h1>
        <button 
          onClick={() => { resetForm(); setShowForm(!showForm); }}
          className="bg-primary text-white px-4 py-2 rounded-md flex items-center"
        >
          {showForm ? <X size={18} className="mr-2" /> : <Plus size={18} className="mr-2" />}
          {showForm ? 'Cancelar' : 'Adicionar Ninhada'}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {editingLitter ? 'Editar Ninhada' : 'Adicionar Nova Ninhada'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pai</label>
                <select
                  name="idpai"
                  value={formData.idpai || ''}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Selecione o pai</option>
                  {dogs
                    .filter(dog => dog.sexo === 'Macho')
                    .map(dog => (
                      <option key={dog.id} value={dog.id}>
                        {dog.nome}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mãe</label>
                <select
                  name="idmae"
                  value={formData.idmae || ''}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Selecione a mãe</option>
                  {dogs
                    .filter(dog => dog.sexo === 'Fêmea')
                    .map(dog => (
                      <option key={dog.id} value={dog.id}>
                        {dog.nome}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Informações Adicionais</label>
              <textarea
                name="infadd"
                value={formData.infadd || ''}
                onChange={handleInputChange}
                rows={5}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Informações sobre a ninhada (suporta HTML)"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
              <textarea
                name="descricao"
                value={formData.descricao || ''}
                onChange={handleInputChange}
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Descrição adicional"
              />
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={() => { setShowForm(false); resetForm(); }}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-md"
              >
                {editingLitter ? 'Atualizar' : 'Salvar'}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar ninhada..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>

        {loading ? (
          <div className="p-4 text-center text-gray-500">Carregando...</div>
        ) : filteredLitters.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            {searchTerm ? 'Nenhuma ninhada encontrada com esse termo.' : 'Nenhuma ninhada cadastrada.'}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pai
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mãe
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredLitters.map((litter) => (
                  <tr key={litter.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {litter.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {getDogNameById(litter.idpai)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {getDogNameById(litter.idmae)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleEdit(litter)}
                        className="text-indigo-600 hover:text-indigo-900 mr-3"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(litter.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLittersPage;