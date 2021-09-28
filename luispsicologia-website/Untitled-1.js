function Pessoa(nome) {
    this.nome = nome;
  }
  
  function PessoaFisica(nome, cpf) {
    Pessoa.call(this, nome);
  
    this.cpf = cpf;
  }
  
  function PessoaJuridica(nome, cnpj) {
    Pessoa(nome);
  
    this.cnpj = cnpj;
  }
  
  const pessoaFisica = new PessoaFisica('Foo', '123.456.670-0');
  const pessoaJuridica = new PessoaJuridica('Bar', '12.345.678/9012-34');
  
  console.log(pessoaFisica);
  console.log(pessoaJuridica);