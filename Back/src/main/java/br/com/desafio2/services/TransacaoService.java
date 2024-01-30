package br.com.desafio2.services;

import br.com.desafio2.entities.TransacaoEntity;
import br.com.desafio2.repositories.TransacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class TransacaoService {
    @Autowired
    private TransacaoRepository transacaoRepository;

    public List<TransacaoEntity> buscarTodasAsTransacoes(){
        return transacaoRepository.findAll();
    }

    public List<TransacaoEntity> buscarTransacaoPorCategoria(String categoria){
        return buscarTodasAsTransacoes().stream()
                .filter(transacao -> transacao.getCategoria().equals(categoria))
                .collect(Collectors.toList());
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

    public List<String> obterCategorias(){
        List<TransacaoEntity> lista = buscarTodasAsTransacoes();
        Set<String> categorias = new HashSet<>();
        for(TransacaoEntity transacao : lista){
            categorias.add(transacao.getCategoria());
        }
        return new ArrayList<>(categorias);
    }

    public double retornarValorTotalOuCategoria(String categoriaAlvo){
        List<TransacaoEntity> lista = buscarTodasAsTransacoes();
        double total = 0;
        if(categoriaAlvo.equals("todas")){
            return lista.stream()
                    .mapToDouble(transacao -> transacao.getValor())
                    .sum();
        } else{
            return lista.stream()
                    .filter(transacao -> transacao.getCategoria().equals(categoriaAlvo))
                    .mapToDouble(transacao -> transacao.getValor())
                    .sum();
        }
    }
}
