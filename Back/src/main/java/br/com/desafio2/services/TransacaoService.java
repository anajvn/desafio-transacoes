package br.com.desafio2.services;

import br.com.desafio2.entities.TransacaoEntity;
import br.com.desafio2.repositories.TransacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TransacaoService {
    @Autowired
    private TransacaoRepository transacaoRepository;

    public List<TransacaoEntity> buscarTodasAsTransacoes(){
        return transacaoRepository.findAll();
    }

    public Optional<TransacaoEntity> buscarTransacaoPorId(Integer id){
        return transacaoRepository.findById(id);
    }

    // PUT e POST
    public Integer inserirOuAtualizarTransacao(TransacaoEntity transacao){
        transacaoRepository.save(transacao);
        return transacao.getId();
    }

    // DELETE
    public boolean apagarTransacao(Integer id){
        if(buscarTransacaoPorId(id).isEmpty()){
            return false;
        } else{
            transacaoRepository.deleteById(id);
            return true;
        }
    }

    // DELETE
    public void apagarTodasAsTransacoes(){
        transacaoRepository.deleteAll();
    }
}
